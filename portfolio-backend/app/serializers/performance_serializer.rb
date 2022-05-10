class PerformanceSerializer < BaseSerializer
  attributes :title, :created_at, :updated_at
  belongs_to :user
  attribute :recording_url do |object|
    object.recording.url
  end
end
