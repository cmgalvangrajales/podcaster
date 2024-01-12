import axios from 'axios';

import * as mockResponse from '../../mocks/podcasts.json';
import { getPodcast } from '../podcast.service';

jest.mock('axios');

describe('Services', () => {
  afterAll(async () => {
    // avoid jest open handle error
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
  });

  test('getPodcasts is returning podcasts', async () => {
    // Make the mock return the custom axios response
    axios.get = jest.fn().mockResolvedValue({ data: mockResponse });

    const serviceResponse = await getPodcast('788236947');

    expect(axios.get).toHaveBeenCalled();
    expect(serviceResponse.results.length).toBeGreaterThan(0);
  });
});
