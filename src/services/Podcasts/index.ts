import { podcastInterface } from './domain/podcasts.types';
import * as PodcastsService from './proxy/podcasts.service';

export type { podcastInterface };
export default PodcastsService;
