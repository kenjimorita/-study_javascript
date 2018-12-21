RSpec.describe User::Update do
  include DepartmentDataset

  before do
    dep_1
  end

  describe "SUCCESS" do
    example "update first_name" do
      params = {
        id: nomal_user.id,
        first_name: "Q太郎"
      }

      result = described_class.call(params: params, current_user: admin_user)

      expect(result).to be_success
      nomal_user.reload
      expect(nomal_user.first_name).to eq("Q太郎")
    end

    example "update last_name" do
      params = {
        id: nomal_user.id,
        last_name: "空条"
      }

      result = described_class.call(params: params, current_user: admin_user)

      expect(result).to be_success
      nomal_user.reload
      expect(nomal_user.last_name).to eq("空条")
    end

    example "update email" do
      params = {
        id: nomal_user.id,
        email: "changed@example.com"
      }

      result = described_class.call(params: params, current_user: admin_user)

      expect(result).to be_success
      nomal_user.reload
      expect(nomal_user.unconfirmed_email).to eq("changed@example.com")
    end

    example "change avatar image" do
      params = {
        id: nomal_user.id,
        avatar: fixture_path.join("images/user.jpg").open
      }

      result = described_class.call(params: params, current_user: admin_user)

      expect(result).to be_success
      nomal_user.reload
      expect(nomal_user.avatar).to be_a_kind_of(AvatarUploader)
      expect(nomal_user.avatar.content_type).to eq("image/jpg")
    end

    example "update admin flag" do
      params = {
        id: nomal_user.id,
        admin: true
      }

      result = described_class.call(params: params, current_user: admin_user)

      expect(result).to be_success
      nomal_user.reload
      expect(nomal_user).to be_admin
    end

    example "update departments" do
      params = {
        id: nomal_user.id,
        department_ids: [dep_1.id]
      }

      result = described_class.call(params: params, current_user: admin_user)

      expect(result).to be_success
      nomal_user.reload
      expect(nomal_user.departments).to contain_exactly(dep_1)
    end
  end
end
