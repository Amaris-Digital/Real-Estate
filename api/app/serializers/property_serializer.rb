class PropertySerializer < ActiveModel::Serializer
  attributes :id, :property_type, :address, :description, :price, :image
end
