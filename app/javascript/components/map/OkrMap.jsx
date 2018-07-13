import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes'
import OkrCard from '../../containers/OkrCard';
import OkrLink from '../../containers/OkrLink';
import EmptyMap from '../../containers/EmptyMap'
import { Card } from 'semantic-ui-react';
import { List, Set } from 'immutable';

class OkrMap extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      links: List(), // List<OkrLink.props>
      groups: List(), // List<objectives>
      rootObjective: null,
    };
    this.onResize = () => this.updateOkrLinks(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.objective) return

    if (!this.props.objective || this.props.objective.get('id') !== nextProps.objective.get('id')
      || this.props.objective.get('parentKeyResultId') !== nextProps.objective.get('parentKeyResultId')) {
      this.createGroups(nextProps.objective, nextProps.mapOkr);
    } else if (this.props.objective !== nextProps.objective) {
      this.createGroups(nextProps.objective, nextProps.mapOkr);
    } else if (this.props.mapOkr !== nextProps.mapOkr) {
      this.createGroups(this.state.rootObjective, nextProps.mapOkr)
    }
  }

  // 基点 Objective と表示リストから上下方向に展開される Objective リストを構築する
  // ex. [[O1], [O2, O3], [O4, O5, O6], ...]
  createGroups(objective, mapOkr) {
    const findRoot = (objective, rootId) => {
      if (objective.get('id') === rootId) {
        return objective;
      } else {
        const parentKeyResult = objective.get('parentKeyResult');
        if (parentKeyResult) {
          const parent = parentKeyResult.get('objective');
          if (parent) {
            return findRoot(parent, rootId);
          } else {
            // 他人の親 Objective (未 fetch) の場合
            this.props.fetchObjective(parentKeyResult.get('objectiveId'));
          }
        } else {
          // 他人の親 KR (未 fetch) の場合
          this.props.fetchObjectiveByKeyResult(objective.get('parentKeyResultId'));
        }
        return objective;
      }
    };

    const collectDescendants = (result, objective) => {
      const keyResults = objective.get('keyResults');
      const childObjectiveIds = keyResults.flatMap(keyResult => keyResult.get('childObjectiveIds'));
      if (!childObjectiveIds.isEmpty()) {
        let childObjectives = keyResults.flatMap(keyResult => keyResult.get('childObjectives'));
        if (childObjectiveIds.size === childObjectives.size) {
          // 親 KR が展開されている子 Objective のみに絞り込む
          const visibleKeyResultIds = mapOkr.get(objective.get('id')) || Set();
          childObjectives = childObjectives.filter(objective => visibleKeyResultIds.includes(objective.get('parentKeyResultId')));
          result = result.push(childObjectives);
          // 子 Objective をさらに展開するかどうかチェックする
          const child = childObjectives.find(objective => mapOkr.has(objective.get('id')));
          if (child) {
            result = collectDescendants(result, child);
          }
        } else {
          // 他人の子 Objective (未 fetch) が含まれている場合
          this.props.fetchObjective(objective.get('id'));
        }
      }
      return result;
    };

    const rootObjective = findRoot(objective, mapOkr.keySeq().first())
    const groups = collectDescendants(List.of(List.of(rootObjective)), rootObjective)
    this.setState({ groups, rootObjective, links: List() })
  }

  // 構築した Objective リストから OKR リンク情報を生成する
  updateOkrLinks({ groups }) {
    // O/KR ID からなるリンク情報の生成
    const idLinks = groups.reduce((result, objectives) => {
      if (result.isEmpty()) {
        // ルート要素に親がいる場合は親とのリンクを追加する
        const rootObjective = objectives.first();
        const parentKeyResultId = rootObjective.get('parentKeyResultId');
        if (parentKeyResultId) {
          result = result.push({
            fromId: rootObjective.getIn(['parentKeyResult', 'objectiveId']),
            fromParentKeyResultId: null,
            paths: List.of({
              toIds: List.of(rootObjective.get('id')),
              fromKeyResultId: parentKeyResultId,
            }),
          });
        }
      }

      // 子がいる場合は子とのリンクを追加する
      objectives.forEach(objective => {
        const keyResults = objective.get('keyResults').filterNot(keyResult => keyResult.get('childObjectiveIds').isEmpty())
        if (!keyResults.isEmpty()) {
          result = result.push({
            fromId: objective.get('id'),
            fromParentKeyResultId: objective.get('parentKeyResultId'),
            paths: keyResults.map(keyResult => ({
              toIds: keyResult.get('childObjectiveIds'),
              fromKeyResultId: keyResult.get('id'),
            })),
          });
        }
      });

      return result;
    }, List());

    // ID リンクから ref 付きのリンク情報に変換する
    const links = idLinks.map(link => ({
      fromId: link.fromId,
      fromRef: this.refs[`objective_${link.fromId}`],
      fromParentKeyResultId: link.fromParentKeyResultId,
      paths: link.paths.map(path => ({
        toIds: path.toIds,
        toRefs: path.toIds.map(toId => this.refs[`objective_${toId}`]),
        fromKeyResultId: path.fromKeyResultId,
      })),
    }))
    this.setState({ links })
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentDidUpdate(prevProps, prevState) {
    // componentDidUpdateではsetStateするべきではないが、コンポーネント間のパスを描画するには
    // コンポーネントをいったん描画してDOMの位置情報を取得する必要があるため許容する
    if (prevState.groups !== this.state.groups) { // 展開/折り畳みによる再描画
      this.updateOkrLinks(this.state);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    const { objective } = this.props
    if (!objective) return <EmptyMap />
    return (
      <div className='okr-map'>
        {this.state.groups.map((objectives, key) => (
          <Card.Group key={key} className='okr-map__group'>
            {objectives
              .reduce((result, objective, index) => (
                // OKR カードをペアにする (2個ずつ折り返すため)
                index % 2 === 0 ? result.push(List.of(objective)) : result.pop().push(result.last().push(objective))
              ), List())
              .map((objectivePair, key) => (
                <div className="okr-map__pair" key={key}>
                  {objectivePair.map(objective => (
                    <OkrCard
                      key={objective.get('id')}
                      objective={objective}
                      ref={`objective_${objective.get('id')}`}
                    />
                  ))}
                </div>
              ))}
          </Card.Group>
        ))}
        {this.state.links.map((link, key) => (
          <OkrLink key={key} {...link} />
        ))}
      </div>
    );
  }
}

OkrMap.propTypes = {
  // container
  objective: ImmutablePropTypes.map,
  mapOkr: ImmutablePropTypes.map.isRequired,
  fetchObjective: PropTypes.func.isRequired,
  fetchObjectiveByKeyResult: PropTypes.func.isRequired,
  // component
};

export default OkrMap;
