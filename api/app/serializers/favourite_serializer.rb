class FavouriteSerializer < ActiveModel::Serializer
  attributes :id, :move_in_date
  has_one :user
  has_one :property
end
