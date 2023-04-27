class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :property_type
      t.string :name
      t.string :address
      t.string :description
      t.integer :price_per_day
      t.integer :price
      t.string :image
      t.integer :bedrooms
      t.integer :bathrooms
      t.integer :parking
      t.integer :size
      t.integer :price_per_week

      t.timestamps
    end
  end
end
