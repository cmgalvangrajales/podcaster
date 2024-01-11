import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import PodcastsService from '@services/Podcasts';

import Typography, { Variants } from '@components/commons/Typography';

import message from './Home.message';

type HomeInterface = {
  setIsLoading: (isLoading: boolean) => void;
};

const Home = ({ setIsLoading }: HomeInterface): JSX.Element => {
  const getPodcasts = async () => {
    const data = await PodcastsService.getPodcasts();
    return data.feed.entry;
  };

  const { data, isLoading, isError, error } = useQuery('podcasts', getPodcasts);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  if (!isLoading && isError) {
    console.error('getPodcasts error', error);
    return (
      <div className="flex items-center justify-center overflow-hidden h-full">
        <Typography variant={Variants.Base225} style={{ textAlign: 'center' }}>
          <FormattedMessage {...message.notFound} />
        </Typography>
      </div>
    );
  }

  console.log('data', data);

  return (
    <div>
      <div>Future content goes here</div>
      <Link to={'/podcast/abc'} onClick={() => setIsLoading(true)}>
        test
      </Link>
    </div>
  );
};

export default Home;
