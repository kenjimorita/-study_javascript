import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import moment from "moment";
import { Card, Icon, List } from "semantic-ui-react";
import OwnerAvatar from "../util/OwnerAvatar";
import ProgressRate from "../util/ProgressRate";
import ToggleButton from "../util/ToggleButton";
import MeetingboardLinkButton from "../util/MeetingboardLinkButton";
import OkrName from "../util/OkrName";



const GenerateKeyResultList = ({
  objective,
  keyResults,
  selectedKeyResultId,
  highlightedKeyResultId,
  visibleKeyResultIds,
  openKeyResultModal,
  highlightKeyResult,
  toggleKeyResult,
  unhighlightOkr,
  openOKRModal,
  showToggle
}) => {
  return (
    <Card.Content className="key-results">
      <List>
        {keyResults.map(keyResult => {
          const keyResultId = keyResult.get("id");
          const isSelected = keyResultId === selectedKeyResultId;
          const isHighlighted = keyResultId === highlightedKeyResultId;
          const isToggleOn = visibleKeyResultIds
            ? visibleKeyResultIds.includes(keyResultId)
            : false;
          return (
            <List.Item
              className="key-results__item"
              key={keyResultId}
              active={isSelected}>
              <OwnerAvatar
                owner={keyResult.get("owner")}
                members={keyResult.get("members")}
              />
              <div
                className={`okr-card__name ${
                  isHighlighted ? "highlight" : ""
                }`}>
                <a
                  onClick={() => openOKRModal(null, keyResultId)}
                  onMouseEnter={() => highlightKeyResult(keyResult)}
                  onMouseLeave={unhighlightOkr}>
                  <OkrName okr={keyResult} />
                </a>
              </div>
              <ProgressRate
                value={keyResult.get("progressRate")}
                status={keyResult.get("status")}
              />

              {showToggle && (
                <ToggleButton
                  on={isToggleOn}
                  visible={!keyResult.get("childObjectiveIds").isEmpty()}
                  onClick={()=> toggleKeyResult(objective, keyResult, isToggleOn)}
                />
              )}
            </List.Item>
          );
        })}
        {keyResults.isEmpty() && (
          <List.Item className="key-results__item--add">
            <List.List>
              <List.Item
                as="a"
                icon="plus"
                content="Key Result を追加する"
                onClick={() => openKeyResultModal(objective)}
              />
            </List.List>
          </List.Item>
        )}
      </List>
    </Card.Content>
  );
}

const OkrCard = (props) => {
    const {
      objective,
      unhighlightOkr,
      highlightObjective,
      openOKRModal,
      handleMeetingBoardLinkClick,
      isSelected,
      isHighlighted
    } = props;
    return (
      <Card className={`okr-card ${isSelected ? "active" : ""}`} raised>
        <Card.Content className="objective">
          <Card.Header>
            <OwnerAvatar owner={objective.get("owner")} size="large" />
            <div
              className={`okr-card__name ${isHighlighted ? "highlight" : ""}`}>
              <a
                onClick={()=> openOKRModal(objective.get("id"))}
                onMouseEnter={()=> highlightObjective(objective)}
                onMouseLeave={unhighlightOkr}>
                <OkrName okr={objective} />
              </a>
            </div>
            <ProgressRate value={objective.get("progressRate")} />
            <MeetingboardLinkButton
              onClick={() => handleMeetingBoardLinkClick(objective.get("id"))}
            />
          </Card.Header>
        </Card.Content>
        <GenerateKeyResultList {...props} />
        <Card.Content extra className="okr-card__meta" textAlign="right">
          <div className="update-time">
            <Icon name="time" />
            {moment(objective.get("updatedAt")).format("YYYY/M/D")} 更新
          </div>
        </Card.Content>
      </Card>
    );
  }

OkrCard.propTypes = {
  // container
  selectedKeyResultId: PropTypes.number,
  highlightedKeyResultId: PropTypes.number,
  visibleKeyResultIds: ImmutablePropTypes.set,
  openKeyResultModal: PropTypes.func.isRequired,
  highlightObjective: PropTypes.func.isRequired,
  highlightKeyResult: PropTypes.func.isRequired,
  unhighlightOkr: PropTypes.func.isRequired,
  toggleKeyResult: PropTypes.func.isRequired,
  // component
  objective: ImmutablePropTypes.map.isRequired,
};

export default OkrCard;
