class Posts < ApplicationRecord
  belongs_to :experiences
  belongs_to :user
  validates :content, presence: true, length: { maximum: 200 }
  mount_uploader :photo, PhotoUploader
end
