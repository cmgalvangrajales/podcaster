interface genresInterface {
  name: string;
  id: string;
}

export interface basicPodcastEntry {
  collectionId: number;
  collectionName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  country: string;
}

export interface podcastEntryInterface extends basicPodcastEntry {
  artistId: number;
  artistName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  currency: string;
  primaryGenreName: string;
  genreIds: string[];
}

export interface episodeInterface extends basicPodcastEntry {
  wrapperType: string;
  kind: string;
  trackId: number;
  trackName: string;
  trackViewUrl: string;
  releaseDate: string;
  trackTimeMillis: number;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genres: genresInterface[];
  closedCaptioning: string;
  episodeFileExtension: string;
  artistViewUrl: string;
  episodeGuid: string;
  shortDescription: string;
  description: string;
  artworkUrl160: string;
  episodeContentType: string;
  artistIds: number[];
  previewUrl: string;
  episodeUrl: string;
}

export interface podcastEndpointInterface {
  resultCount: number;
  results: [podcastEntryInterface, ...Array<episodeInterface>];
}
