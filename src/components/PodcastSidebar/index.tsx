import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import PodcastsService from '@services/Podcasts';

import ItemsNotFound from '@components/commons/ItemsNotFound';
import Typography, { Colors, Variants } from '@components/commons/Typography';

import message from './PodcastSidebar.message';

type podcastSidebarType = {
  setIsLoading: (isLoading: boolean) => void;
  shouldRedirect?: boolean;
  podcastIdTest?: string;
};

const PodcastSidebar = ({ setIsLoading, shouldRedirect = false, podcastIdTest = undefined }: podcastSidebarType): React.ReactNode => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const podcastId = podcastIdTest || urlParams.podcastId;

  const getPodcasts = async () => {
    const data = await PodcastsService.getPodcasts();
    return data.feed.entry;
  };
  const { data, isLoading, isError, error } = useQuery('podcasts', getPodcasts);

  if (isLoading) {
    return null;
  }

  if (isError || !podcastId || !data || data.length === 0) {
    if (isError) {
      console.error('getPodcast error', error);
    }

    return <ItemsNotFound />;
  }

  const podcastData = data.find((element) => element.id.attributes['im:id'].toLocaleLowerCase() === podcastId.toLocaleLowerCase());

  if (!podcastData) {
    return <ItemsNotFound />;
  }

  const handleClick = () => {
    if (podcastId && shouldRedirect) {
      setIsLoading(true);
      navigate(`/podcast/${podcastId}`);
    }
  };

  return (
    <div>
      <div className="p-3 round shadow flex flex-col gap-4 max-w-56">
        <div onClick={() => handleClick()} className={`flex flex-col gap-4 justify-center ${shouldRedirect ? 'cursor-pointer' : ''}`}>
          <div>
            <img src={podcastData['im:image'][2].label} alt="podcast image" />
          </div>
          <div className="border-b-2 border-b-solid"></div>
          <div className="flex flex-col gap-y-1">
            <Typography variant={Variants.Base110}>{podcastData.title.label}</Typography>
            <Typography variant={Variants.Base108} color={Colors.Gray500} style={{ fontStyle: 'italic' }}>
              <FormattedMessage {...message.by} /> {podcastData['im:artist'].label}
            </Typography>
          </div>
          <div className="border-b-2 border-b-solid"></div>
        </div>
        <div className="flex flex-col gap-y-2">
          <Typography variant={Variants.Base110}>
            <FormattedMessage {...message.description} />:
          </Typography>
          <Typography variant={Variants.Base108} color={Colors.Gray500} style={{ fontStyle: 'italic', wordBreak: 'break-word' }}>
            {podcastData.summary.label}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PodcastSidebar;
