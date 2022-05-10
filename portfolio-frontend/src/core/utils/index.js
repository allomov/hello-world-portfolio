
export const processResponseWithJsonapiCollection = (collection) => {
  return collection.map((resource) => processResponseWithJsonapiResource(resource))
}

export const processResponseWithJsonapiResource = (resource) => {
  return {
    id: resource.id,
    ...resource.attributes
  }  
}
