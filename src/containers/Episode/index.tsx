import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { episodeInterface } from '@services/Podcast';
import * as mock from '@services/Podcast/mocks/podcast.json';

import PodcastSidebar from '@components/PodcastSidebar';
import Typography, { Colors, Variants } from '@components/commons/Typography';

type EpisodeInterface = {
  setIsLoading: (isLoading: boolean) => void;
  mockedEpisode?: episodeInterface;
};

const Episode = ({ setIsLoading, mockedEpisode }: EpisodeInterface): React.ReactNode => {
  const navigate = useNavigate();
  const audioTag = useRef<HTMLAudioElement>(null);
  const urlParams = useParams();
  const episodeId = urlParams.episodeId;

  const episode: episodeInterface | undefined = mockedEpisode
    ? mockedEpisode
    : mock.episodes.find((episode) => episode.trackId.toString() === episodeId);

  if (!episode) {
    setIsLoading(true);
    navigate(`/notfound`);
    return;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 pt-5 max-w-screen-2xl m-auto">
      <PodcastSidebar
        image={mock.artworkUrl600}
        title={mock.title}
        author={mock.artistName}
        description={mock.description}
        podcastId={mock.id}
        setIsLoading={setIsLoading}
      />
      <div className="flex flex-col gap-y-5">
        <div className="p-3 gap-4 round shadow flex flex-col">
          <Typography variant={Variants.Base215} tagAs={'h1'} data-testid="trackname" color={Colors.Gray500}>
            {episode.trackName}
          </Typography>
          <Typography variant={Variants.Base110} color={Colors.Gray500} data-testid="trackdescription" style={{ fontStyle: 'italic' }}>
            {episode.trackDescription}
          </Typography>
          <audio ref={audioTag} className="w-full" src={episode.trackUrl} controls />
        </div>
      </div>
    </div>
  );
};

export default Episode;
