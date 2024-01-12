import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import NotFound from '@pages/404';
import Episode from '@pages/Episode';
import HomePage from '@pages/Home';
import Podcast from '@pages/Podcast';

import { Content, Header } from '@components/layout';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    // execute on location change
    setIsLoading(false);
  }, [location]);

  return (
    <div className="overflow-hidden grid h-screen grid-rows-[auto_1fr]">
      <Header isLoading={isLoading} setIsLoading={setIsLoading} />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage setIsLoading={setIsLoading} />} />
          <Route path="/podcast/:podcastId" element={<Podcast setIsLoading={setIsLoading} />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode setIsLoading={setIsLoading} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </div>
  );
};

export default App;
