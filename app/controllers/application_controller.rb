class ApplicationController < ActionController::Base
  respond_to :html, :json
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  rescue_from ActiveRecord::RecordNotFound, with: :error_not_found

  def error_not_found
    # TODO:
    # 例外処理あとで設計する。
    render json: { error: '404 error' }, status: 404
  end
end
