json.extract! user, :id, :first_name, :last_name, :avatar_url, :email, :unconfirmed_email, :disabled

json.is_admin user.admin?
