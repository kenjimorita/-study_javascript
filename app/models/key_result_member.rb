class KeyResultMember < ApplicationRecord
  belongs_to :key_result
  belongs_to :user

  enum role: { owner: 0, member: 1 }

  validates :user_id, :uniqueness => {:scope => :key_result_id}

  before_create do
    self.processed = user_id == key_result.objective.owner.id unless processed
  end

  after_save do
    NotificationMailer.assign_key_result(user, key_result).deliver_later
  end
end
