class ApplicationController < ActionController::API
  include JsonapiRenderMethods

  before_action do
    ActiveStorage::Current.host = request.base_url
  end
end
