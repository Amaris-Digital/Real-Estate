class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :id, :first_name, :last_name, :role
end
