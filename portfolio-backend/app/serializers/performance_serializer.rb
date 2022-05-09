class PerformanceSerializer < BaseSerializer
  attributes :title, :created_at, :updated_at
  belongs_to :user
end
