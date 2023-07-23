class Todo < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true, length: { minimum: 5, maximum: 200 }
  validates :completed, inclusion: { in: [true, false] }
end
