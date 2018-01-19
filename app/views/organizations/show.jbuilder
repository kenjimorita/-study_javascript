json.organization do
  json.partial! 'organizations/organization', organization: @organization
  json.okr_periods @organization&.okr_periods.order(:month_start)
  json.members @organization.members do |user|
    json.id user.id
    json.first_name user.first_name
    json.last_name user.last_name
    json.email user.email
    json.avatar_url user.avatar_url
    json.organization_name user.organization.name
    json.unconfirmed_email user.unconfirmed_email
    json.confirmed_at user.confirmed_at
    json.is_admin user.admin?
  end
end