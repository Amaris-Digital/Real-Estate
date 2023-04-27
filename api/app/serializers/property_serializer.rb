class PropertySerializer < ActiveModel::Serializer
  attributes :id, :property_type, :address, :description, :price, :image, :name, :bedrooms, :bathrooms, :parking, :size, :price_per_day, :price_per_week
  has_many :reviews
end
