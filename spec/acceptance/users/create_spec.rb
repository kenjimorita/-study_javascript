require "rspec_api_documentation/dsl"
Rails.root.join("spec/acceptance/concerns").each_child { |path| require_dependency(path) }

RSpec.resource "POST /users", warden: true do
  explanation "users#create"

  include RequestHeaderJson
  include DepartmentDataset

  before do
    dep_1
    login_as(admin_user)
  end

  post "/users" do
    with_options scope: :user do
      parameter :first_name, "ユーザ名(名)", type: :string, required: true
      parameter :last_name, "ユーザ名(姓)", type: :string, required: true
      parameter :email, "メールアドレス", type: :string, required: true
      parameter :admin, "管理者かどうかを設定", type: :boolean, required: true
      parameter :skip_notification, "メール認証をスキップするかどうかを設定", type: :boolean, required: true
      parameter :department_id, "所属させる部署のID", type: :integer, required: true
    end

    example "SUCCESS: Add a new user to the organization of the signed-in user" do
      explanation "サインイン中のユーザの組織に新しくユーザを追加する"

      do_request(
        user: {
          first_name: "Q太郎",
          last_name: "空条",
          email: "jojo-q@example.com",
          admin: false,
          skip_notification: false,
          department_id: dep_1.id
        }
      )

      expect(response_status).to eq(201)
      expect(parse_response_body("user")).to include(
        "id" => a_kind_of(Integer),
        "first_name" => "Q太郎",
        "last_name" => "空条",
        "avatar_url" => nil,
        "disabled" => false,
        "sign_in_at" => nil,
        "email" => "jojo-q@example.com",
        "is_confirming" => true,
        "is_admin" => false
      )

      user = User.find_by(email: "jojo-q@example.com")
      expect(user.departments).to eq([dep_1])
    end

    example "ERROR: Error when there is no required params" do
      explanation "必須項目がない場合エラー"

      do_request(
        user: {
          first_name: nil,
          last_name: nil,
          email: nil,
          admin: nil,
          skip_notification: nil,
          department_id: nil
        }
      )

      expect(response_status).to eq(422)
      expect(parse_response_body("error")).to eq(
        "メールアドレスを入力してください, メールアドレスは不正な値です, ユーザー名 (名) を入力してください, ユーザー名 (姓) を入力してください"
      )
    end

    example "ERROR: When not entering department id" do
      explanation "部署IDを入力しない場合エラー"

      do_request(
        user: {
          first_name: "Q太郎",
          last_name: "空条",
          email: "jojo-q@example.com",
          admin: false,
          skip_notification: false,
          department_id: nil
        }
      )

      expect(response_status).to eq(422)
    end

    example "ERROR: Cannot specify a department of another organization" do
      explanation "別の組織の部署は指定できない"

      do_request(
        user: {
          first_name: "Q太郎",
          last_name: "空条",
          email: "jojo-q@example.com",
          admin: false,
          skip_notification: false,
          department_id: dep_2.id
        }
      )

      expect(response_status).to eq(422)
    end
  end
end
