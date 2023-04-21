class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :property_type
      t.string :address
      t.string :description
      t.integer :price
      t.string :image

      t.timestamps
    end
  end
end
