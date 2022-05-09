class Performance < ApplicationRecord
  has_one_attached :recording
  belongs_to :user

  default_scope -> { with_attached_recording }
end
