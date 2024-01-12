import axios from 'axios';

import * as mockResponse from '../../mocks/podcasts.json';
import { getPodcasts } from '../podcasts.service';

jest.mock('axios');

describe('Services', () => {
  afterAll(async () => {
    // avoid jest open handle error
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
  });

  test('getPodcasts is returning podcasts', async () => {
    // Make the mock return the custom axios response
    axios.get = jest.fn().mockResolvedValue({ data: mockResponse });

    const serviceResponse = await getPodcasts();

    expect(axios.get).toHaveBeenCalled();
    expect(serviceResponse.feed.entry.length).toBeGreaterThan(0);
  });
});
