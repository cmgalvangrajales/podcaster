export interface podcastInterface {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
}

export interface podcastEndpointInterface {
  resultCount: number;
  results: podcastInterface[];
}

export interface episodeInterface {
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
  trackId: number;
  trackDescription: string;
  trackUrl: string;
}

export interface podcastDetailInterface {
  id: number;
  title: string;
  description: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl600: string;
  artistName: string;
  episodes: episodeInterface[];
}
