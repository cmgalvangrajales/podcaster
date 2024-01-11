import { useEffect } from 'react';
import { useQuery } from 'react-query';

import PodcastsService from '@services/Podcasts';

import { HomeType } from './Home.types';
import ItemsNotFound from './components/ItemsNotFound';
import PodcastCards from './components/PodcastCards';

const Home = ({ setIsLoading }: HomeType): JSX.Element => {
  const getPodcasts = async () => {
    const data = await PodcastsService.getPodcasts();
    return data.feed.entry;
  };

  const { data, isLoading, isError, error } = useQuery('podcasts', getPodcasts);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  if ((!isLoading && isError) || !data) {
    console.error('getPodcasts error', error);
    return <ItemsNotFound />;
  }

  console.log('data', data);

  return (
    <div>
      <PodcastCards podcasts={data} setIsLoading={setIsLoading} />
    </div>
  );
};

export default Home;
