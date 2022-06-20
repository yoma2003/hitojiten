class Character < ApplicationRecord
  has_one_attached :image

  belongs_to :user
  # has_many :past_topics, dependent: destroy
  # has_many :future_topics, dependent: destroy
  # has_many :categories, through: character_categories, dependent: destroy

  validates :name, presence: true
end
