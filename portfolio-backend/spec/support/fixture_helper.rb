# frozen_string_literal: true

module FixtureHelpers
  def fixtures_folder_path
    Pathname.new(File.join(__dir__, "..", "fixtures"))
  end

  def fixtures_path(*args)
    fixtures_folder_path.join(*args)
  end

  def recordings_fixture(name)
    fixtures_path("recordings", name)
  end
end