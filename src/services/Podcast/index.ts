import { episodeInterface, podcastDetailInterface } from './domain/podcast.types';
import * as PodcastService from './proxy/podcast.service';

export default PodcastService;
export type { podcastDetailInterface, episodeInterface };
