const categoriesData = ({ responseData }) => {
  const mapResponseData = responseData.map(data => {
    const dataModel = {
      id: data.id,
      title: data.attributes.title,
      description: data.attributes.description,
      mediaCount: data.attributes.totalMediaCount,
      links: data.links.self,
      image: data.attributes.image || 'No Image Available',
    }
    return dataModel
  })
  return mapResponseData
}

export default categoriesData
