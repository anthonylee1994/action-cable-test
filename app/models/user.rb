# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_username  (username) UNIQUE
#
class User < ApplicationRecord
  has_secure_password

  def self.from_token(token)
    decoded_auth_token = JwtService.decode(token)
    User.find_by!(id: decoded_auth_token[:user_id])
  end

  def token
    JwtService.encode(user_id: id)
  end
end
