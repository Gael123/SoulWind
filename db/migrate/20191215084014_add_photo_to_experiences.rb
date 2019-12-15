class AddPhotoToExperiences < ActiveRecord::Migration[6.0]
  def change
    add_column :experiences, :photo, :string
  end
end
