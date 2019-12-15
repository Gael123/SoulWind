class Experience < ApplicationRecord
  has_many :posts
  belongs_to :user
  validates :content, presence: true,
