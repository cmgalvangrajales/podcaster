import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import PodcastService, { episodeInterface } from '@services/Podcast';
import * as mock from '@services/Podcast/mocks/podcast.json';

import PodcastSidebar from '@components/PodcastSidebar';
import ItemsNotFound from '@components/commons/ItemsNotFound';
import Typography, { Colors, Variants } from '@components/commons/Typography';

import Table from './Components/Table';
import message from './Podcast.message';

type PodcastType = {
  setIsLoading: (isLoading: boolean) => void;
  useMock?: boolean;
};

type QueryType = {
  data: episodeInterface[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

const Podcast = ({ setIsLoading, useMock = false }: PodcastType): React.ReactNode => {
  const urlParams = useParams();
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

  if (isError || !podcastId || !data || data.length === 0) {
    if (isError) {
      console.error('getPodcast error', error);
    }

    return <ItemsNotFound />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 pt-5 max-w-screen-2xl m-auto">
      <PodcastSidebar setIsLoading={setIsLoading} />
      <div className="flex flex-col gap-y-5">
        <div className="p-3 round shadow" data-testid="episodesTitle">
          <Typography variant={Variants.Base215} color={Colors.Gray500}>
            <FormattedMessage {...message.episodes} />: {data.length}
          </Typography>
        </div>
        {data.length > 0 && (
          <div className="p-3 round shadow">
            <Table episodes={data} setIsLoading={setIsLoading} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Podcast;
