import { Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import NotFound from '@pages/404';
import Episode from '@pages/Episode';
import HomePage from '@pages/Home';
import Podcast from '@pages/Podcast';

import { Content, Header } from '@components/layout';

const App = () => {
  return (
    <div className="overflow-hidden grid h-screen grid-rows-[auto_1fr]">
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/podcast/:podcastId" element={<Podcast />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </div>
  );
};

export default App;
