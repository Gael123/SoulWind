class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.text :content
      t.string :gear
      t.string :location

      t.timestamps
    end
  end
end
