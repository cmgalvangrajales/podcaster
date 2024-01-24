import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import PodcastsService, { podcastInterface } from '@services/Podcasts';

import ItemsNotFound from '@components/commons/ItemsNotFound';

import { HomeType } from './Home.types';
import PodcastCards from './components/PodcastCards';
import PodcastFilter from './components/PodcastFilter';

const Home = ({ setIsLoading }: HomeType): React.ReactNode => {
  const [filteredPodcasts, setFilteredPodcasts] = useState<podcastInterface[]>();

  const getPodcasts = async () => {
    const data = await PodcastsService.getPodcasts();
    return data.feed.entry;
  };
  const { data, isLoading, isError, error } = useQuery('podcasts', getPodcasts);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    if (data) {
      setFilteredPodcasts(data);
    }
  }, [data, setFilteredPodcasts]);

  if (isLoading || !filteredPodcasts) {
    return null;
  }

  if ((!isLoading && isError) || !data) {
    console.error('getPodcasts error', error);
    return <ItemsNotFound />;
  }

  const filterPodcasts = (valueToFilterWith) => {
    const filteredItems = data.filter(
      (item) =>
        item.title.label.toLocaleLowerCase().includes(valueToFilterWith) ||
        item['im:artist'].label.toLocaleLowerCase().includes(valueToFilterWith),
    );

    setFilteredPodcasts(filteredItems);
  };

  const handleFilterChange = (value) => {
    if (value.trim() !== '') {
      filterPodcasts(value.trim().toLocaleLowerCase());
    } else {
      setFilteredPodcasts(data);
    }
  };

  return (
    <div className="mt-3 pb-5" data-testid="podcasts-container">
      <PodcastFilter {...{ filteredPodcasts, handleFilterChange }} />
      {filteredPodcasts.length === 0 ? <ItemsNotFound /> : <PodcastCards podcasts={filteredPodcasts} setIsLoading={setIsLoading} />}
    </div>
  );
};

export default Home;
