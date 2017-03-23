class Actor < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :birth_date, presence: true

  has_many :roles

end
