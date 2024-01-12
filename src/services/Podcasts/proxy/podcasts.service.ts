import { env } from '@environment/env';

import { get } from '../../ServiceBase';
import { podcastsEndpointInterface } from '../domain/podcasts.types';

/**
 * Gets the podcasts list
 */
export function getPodcasts(): Promise<podcastsEndpointInterface> {
  return get({
    servicePath: env.podcasts,
  });
}
