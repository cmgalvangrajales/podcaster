import { render, screen } from '@config/tests/utils';

import Table from '../index';

const episodesMock = [
  {
    closedCaptioning: 'none',
    collectionId: 1311004083,
    collectionName: 'Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond',
    artworkUrl60:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/89/c9/c0/89c9c0f4-2979-6c79-a741-0c475e3ce3c7/mza_13828317248702878788.jpg/60x60bb.jpg',
    episodeFileExtension: 'mp3',
    artistViewUrl: 'https://itunes.apple.com/us/artist/pushkin-industries/1465988663?mt=2&uo=4',
    collectionViewUrl: 'https://itunes.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?mt=2&uo=4',
    trackViewUrl: 'https://podcasts.apple.com/us/podcast/future-islands/id1311004083?i=1000642548451&uo=4',
    trackTimeMillis: 3271000,
    contentAdvisoryRating: 'Clean',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
    episodeGuid: '30ef42e4-061e-4fbb-ae2b-ec99e04e3316',
    shortDescription: '',
    description:
      'The Baltimore-based synth-pop band Future Islands was first thrust into the national spotlight in 2014 after making their TV debut on The Late Show With David Letterman. The band’s unassuming frontman Samuel T. Herring danced ecstatically around the stage seething with emotion. The performance quickly went viral, making it one of Letterman’s most memorable live appearances of all time.\n\nAt the time of their big break, Future Islands had already released three albums and been touring relentlessly for nearly a decade. And while they would become one of the most prominent bands on the festival circuit for the next several years, Future Islands has always maintained a sense of unparalleled raw vulnerability on-stage—in part because of the deeply confessional nature of Sam’s songwriting and electric stage presence.\n\nOn today’s episode Leah Rose talks to Future Islands lead singer Samuel T. Herring about the band’s latest album, People Who Aren’t There Anymore. Samuel also describes the physical toll his energetic performance style has taken on his body over the years. And his long-held gripe with guitar-based music.\n\nYou can hear a playlist of some of our favorite Future Islands songs HERE.\nSee omnystudio.com/listener for privacy information.',
    artworkUrl160:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/89/c9/c0/89c9c0f4-2979-6c79-a741-0c475e3ce3c7/mza_13828317248702878788.jpg/160x160bb.jpg',
    episodeContentType: 'audio',
    trackId: 1000642548451,
    trackName: 'Future Islands',
    releaseDate: '2024-01-23T10:00:00Z',
    artistIds: [1465988663],
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/ff0ba2f2-f33c-4193-aba2-ae32006cd633/11c188a1-cb86-4869-9c57-ae32006cd63c/podcast.rss',
    previewUrl:
      'https://chtbl.com/track/39E17/podtrac.com/pts/redirect.mp3/pdrl.fm/2b09fd/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/ff0ba2f2-f33c-4193-aba2-ae32006cd633/f7e22975-28ab-41b6-9d90-b0ff0155db67/audio.mp3?utm_source=Podcast&in_playlist=11c188a1-cb86-4869-9c57-ae32006cd63c',
    episodeUrl:
      'https://chtbl.com/track/39E17/podtrac.com/pts/redirect.mp3/pdrl.fm/2b09fd/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/ff0ba2f2-f33c-4193-aba2-ae32006cd633/f7e22975-28ab-41b6-9d90-b0ff0155db67/audio.mp3?utm_source=Podcast&in_playlist=11c188a1-cb86-4869-9c57-ae32006cd63c',
    artworkUrl600:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/89/c9/c0/89c9c0f4-2979-6c79-a741-0c475e3ce3c7/mza_13828317248702878788.jpg/600x600bb.jpg',
    country: 'USA',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
  },
];

const defaultComponent = <Table episodes={episodesMock} setIsLoading={() => {}} />;

describe('<Table />', () => {
  test('Episodes table exists', async () => {
    render(defaultComponent);
    const table = screen.getByTestId('episodes');

    expect(table).toBeInTheDocument();
  });
});
