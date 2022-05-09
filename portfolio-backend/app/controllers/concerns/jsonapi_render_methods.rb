module JsonapiRenderMethods
  def render_jsonapi(options={})
    serializable_hash = options.key?(:collection) ? collection_serializable_hash(**options) : resource_serializable_hash(**options)
    status = options.fetch(:status, :ok)
    render(
      json:   serializable_hash.as_json,
      status: status
    )
  end

  def collection_serializable_hash(serializer:, collection:)
    serializer.new(collection, is_collection: true).serializable_hash
  end

  def resource_serializable_hash(serializer:, resource:)
    serializer.new(resource).serializable_hash
  end
end
