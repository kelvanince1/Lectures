class Movie < ApplicationRecord
  validates :name, presence: true
  validates :date, presence: true

  has_many :actors, through: :roles
  has_many :roles, through: :actors
  has_and_belongs_to_many :genres
end
