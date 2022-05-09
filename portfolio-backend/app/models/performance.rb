class Performance < ApplicationRecord
  default_scope -> { with_attached_avatar }

  has_one_attached :recording
  belongs_to :user
end
