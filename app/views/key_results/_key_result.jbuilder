# frozen_string_literal: true

json.extract! key_result, :id, :name, :objective_id, :target_value, :actual_value, :value_unit, :expired_date, :progress_rate, :status, :description, :disabled
json.is_full true
json.child_objective_ids key_result.sorted_child_objective_ids

json.owner do
  json.extract! key_result.owner, :id, :first_name, :last_name, :avatar_url, :disabled if key_result.owner
end

json.members do
  json.array! key_result.members, :id, :first_name, :last_name, :avatar_url, :disabled
end
