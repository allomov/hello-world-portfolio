FactoryBot.define do
  factory :performances, class: "Performance" do
    title { Faker::Name.title }
    recording { fixture_file_upload(recording_fixture("react-webcam-stream-capture.webm")) }

    after(:create) do |performance|
      performance.update!(user: creater(:user)) if performance.user.blank?
    end
  end
end
