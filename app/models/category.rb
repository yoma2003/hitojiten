class Category < ApplicationRecord
  belongs_to :user
  has_many :character_categories, dependent: :destroy
  has_many :characters, through: :character_categories

  validates :name, presence: true
end