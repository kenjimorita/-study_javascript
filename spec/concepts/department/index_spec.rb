RSpec.describe Department::Index do
  include DepartmentDataset

  let(:l_name) { ->(h) { h[:name] } }

  example "SUCCESS: 指定した組織の情報を全て返す" do
    params = {
      organization_id: organization.id
    }

    result = described_class.call(params: params)

    root = result[:query].first
    expect(root).to include(
      "id" => dep_1.id,
      "soft_destroyed_at" => nil,
      "name" => "代表",
      "display_order" => 1,
      "created_at" => dep_1.created_at,
      "updated_at" => dep_1.updated_at,
      "children" => a_kind_of(Array)
    )

    expect(root.dig("name")).to eq("代表")
    expect(root.dig("children").map(&l_name)).to contain_exactly("開発部", "営業部", "経理部")
    expect(root.dig("children", 0, "children").map(&l_name)).to contain_exactly("金融部", "Web部")
    expect(root.dig("children", 1, "children").map(&l_name)).to contain_exactly("クラサポ部", "販売部")
    expect(root.dig("children", 2, "children").map(&l_name)).to eq([])
  end

  example "SUCCESS: 指定したIDの部署以下の情報を返す" do
    params = {
      organization_id: organization.id,
      ids: [dep_1_1.id]
    }

    result = described_class.call(params: params)

    root = result[:query].first
    expect(root.dig("name")).to eq("開発部")
    expect(root.dig("children").map(&l_name)).to contain_exactly("金融部", "Web部")
  end

  example "SUCCESS: 複数のIDを指定した場合、それそれのIDの部署以下の情報を全て返す" do
    params = {
      organization_id: organization.id,
      ids: [dep_1_1.id, dep_1_2.id]
    }

    result = described_class.call(params: params)

    expect(result[:query].size).to eq(2)
    expect(result[:query].map(&l_name)).to contain_exactly("開発部", "営業部")
    expect(result[:query].dig(0, "children").map(&l_name)).to contain_exactly("金融部", "Web部")
    expect(result[:query].dig(1, "children").map(&l_name)).to contain_exactly("クラサポ部", "販売部")
  end

  example "ERROR: 指定した部署の組織が異なる" do
    params = {
      organization_id: organization.id,
      ids: [dep_2.id]
    }

    result = described_class.call(params: params)
    contract = result["contract.default"]

    expect(result).to be_failure
    expect(contract.errors.full_messages).to include(
      "部署IDは組織内から選択してください"
    )
  end

  example "ERROR: 必須項目を入録しない場合" do
    result = described_class.call(params: {})

    contract = result["contract.default"]

    expect(result).to be_failure
    expect(contract.errors.full_messages).to include(
      "組織を入力してください"
    )
  end
end
