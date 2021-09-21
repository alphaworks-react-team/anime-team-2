const animeModel = responseData => {
  const mapResponseData = responseData.map((data, index) => {
    const dataModel = {
      id: data.id,
      titles: {
        english:
          data.attributes.titles.en ||
          data.attributes.titles.en_us ||
          data.attributes.titles.en_jp,
        japanese: data.attributes.titles.ja_jp,
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
        mediaType: data.attributes.showType,
        ageRating: data.attributes.ageRating,
        startDate: data.attributes.startDate,
        endDate: data.attributes.endDate,
      },
      images: {
        small: data.attributes.posterImage.small,
        medium: data.attributes.posterImage.medium,
        large: data.attributes.posterImage.large,
        original: data.attributes.posterImage.original,
      },
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
}

export default animeModel
