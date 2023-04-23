class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :message
  has_one :Property
end
