const categoriesModel = responseData => {
  const mapResponseData = responseData.map(data => {
    const dataModel = {
      id: data.id,
      title: data.attributes.title,
      description: data.attributes.description,
      mediaCount: data.attributes.totalMediaCount,
      images: {
        tiny: data.attributes.images?.tiny || undefined,
        small: data.attributes.images?.small || undefined,
        medium: data.attributes.images?.medium || undefined,
        large: data.attributes.images?.large || undefined,
        original: data.attributes.images?.original || undefined,
      },
    }
    return dataModel
  })
  return mapResponseData
}

export default categoriesModel
