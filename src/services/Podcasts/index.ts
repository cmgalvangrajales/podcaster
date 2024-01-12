import { podcastInterface } from './domain/podcasts.types';
import * as mockResponse from './mocks/podcasts.json';
import * as PodcastsService from './proxy/podcasts.service';

export type { podcastInterface };
export { mockResponse };
export default PodcastsService;
