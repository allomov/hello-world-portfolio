class UserSerializer < BaseSerializer
  attributes :first_name, :last_name, :email

  attribute :full_name do |object|
    "#{object.first_name} #{object.last_name}"
  end

  attribute :avatar_url do |object|
    avatar_number = object.id.split("").map(&:to_i).sum % 100
    "https://randomuser.me/api/portraits/men/#{avatar_number}.jpg"
  end
end
