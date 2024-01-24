import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import PodcastService, { episodeInterface } from '@services/Podcast';
import * as mock from '@services/Podcast/mocks/podcast.json';

import PodcastSidebar from '@components/PodcastSidebar';
import ItemsNotFound from '@components/commons/ItemsNotFound';
import Typography, { Colors, Variants } from '@components/commons/Typography';

type EpisodeInterface = {
  setIsLoading: (isLoading: boolean) => void;
  useMock?: boolean;
};

type QueryType = {
  data: episodeInterface[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

const Episode = ({ setIsLoading, useMock = false }: EpisodeInterface): React.ReactNode => {
  const audioTag = useRef<HTMLAudioElement>(null);
  const urlParams = useParams();
  const episodeId = useMock ? mock.results[1].trackId.toString() : urlParams.episodeId;
  const podcastId = useMock ? mock.results[1].collectionId.toString() : urlParams.podcastId;

  const getPodcast = async () => {
    if (useMock) {
      return [mock.results[1]];
    }

    const data = await PodcastService.getPodcast(podcastId);

    if (data.results?.length > 1) {
      return data.results.slice(1);
    }

    return data.results;
  };

  const { data, isLoading, isError, error }: QueryType = useQuery('podcast', getPodcast);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  if (isLoading) {
    return null;
  }

  const episode: episodeInterface | undefined = data?.find(
    (episode) => episode.trackId.toString().toLocaleLowerCase() === episodeId?.toLocaleLowerCase(),
  );

  if (isError || !podcastId || !episodeId || !episode) {
    if (isError) {
      console.error('getPodcast error', error);
    }

    return <ItemsNotFound />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 pt-5 max-w-screen-2xl m-auto">
      <PodcastSidebar shouldRedirect setIsLoading={setIsLoading} />
      <div className="flex flex-col gap-y-5">
        <div className="p-3 gap-4 round shadow flex flex-col">
          <Typography variant={Variants.Base215} tagAs={'h1'} data-testid="trackname" color={Colors.Gray500}>
            {episode.trackName}
          </Typography>
          <Typography variant={Variants.Base110} color={Colors.Gray500} data-testid="trackdescription" style={{ fontStyle: 'italic' }}>
            {episode.description}
          </Typography>
          <audio ref={audioTag} className="w-full" src={episode.episodeUrl} controls />
        </div>
      </div>
    </div>
  );
};

export default Episode;
