import { env } from '@environment/env';

import { get } from '../../ServiceBase';
import { podcastEndpointInterface } from '../domain/podcast.types';

/**
 * Gets the podcast detail
 */
export function getPodcast(podcastId): Promise<podcastEndpointInterface> {
  return get({
    servicePath: `${env.podcastDetail}${podcastId}`,
  });
}
