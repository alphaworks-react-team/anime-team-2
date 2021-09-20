const dataTransformer = responseData => {
  // const transformedData = []
  console.log(responseData)
  const mapResponseData = responseData.map((data, index) => {
    const dataModel = {
      id: data.id,
      titles: {
        english: data.attributes.en,
        japanese: data.attributes.ja_jp,
      },
      categories: {
        self: data.relationships.categories.links.self,
        related: data.relationships.categories.links.related,
      },
      genre: {
        self: data.relationships.genres.links.self,
        related: data.relationships.genres.links.related,
      },
      generalInfo: {
        mediaType: data.attributes.subType,
        ageRating: data.attributes.ageRating,
        startDate: data.attributes.startDate,
        endDate: data.attributes.endDate,
      },
      // images: {
      //   small: {
      //     cover: data.attributes.coverImage.small,
      //     poster: data.attributes.posterImage.small,
      //   },
      //   medium: {
      //     cover: data.attributes.coverImage.medium,
      //     poster: data.attributes.posterImage.medium,
      //   },
      //   large: {
      //     cover: data.attributes.coverImage.large,
      //     poster: data.attributes.posterImage.large,
      //   },
      //   original: {
      //     cover: data.attributes.coverImage.original,
      //     poster: data.attributes.posterImage.original,
      //   },
      // },
      episodeInfo: {
        count: data.attributes.episodeCount,
        lengthInMinutes: data.attributes.episodeLength,
      },
      stream: {
        trailer: data.attributes.youtubeVideoId,
        self: data.relationships.categories.links.self,
        related: data.relationships.categories.links.related,
      },
      reviews: {
        self: data.relationships.reviews.links.self,
        related: data.relationships.reviews.links.related,
        userPopularity: {
          rank: data.attributes.popularityRank,
          favCount: data.attributes.favoritesCount,
          approvalPercent: data.attributes.averageRating,
        },
      },
      installments: {
        self: data.relationships.installments.links.self,
        related: data.relationships.installments.links.related,
      },
    }
    return { dataModel }
  })

  return { mapResponseData }
  // responseData =
  //   !undefined || null
  //     ? mapResponseData
  //     : `Response Data Not Found. *Debug Note*: check utils/Axios or the component caller [that intiated this function] :) `
}

export default dataTransformer
