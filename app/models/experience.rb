class Experience < ApplicationRecord
  has_many :posts
  belongs_to :user
  validates :content, presence: true
  geocoded_by :location
  after_validation :geocode, if: :will_save_change_to_location
end
