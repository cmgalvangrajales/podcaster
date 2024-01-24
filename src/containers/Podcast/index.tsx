import { FormattedMessage } from 'react-intl';

import * as mock from '@services/Podcast/mocks/podcast.json';

import PodcastSidebar from '@components/PodcastSidebar';
import Typography, { Colors, Variants } from '@components/commons/Typography';

import Table from './Components/Table';
import message from './Podcast.message';

type PodcastInterface = {
  setIsLoading: (isLoading: boolean) => void;
};

const Podcast = ({ setIsLoading }: PodcastInterface): JSX.Element => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 pt-5 max-w-screen-2xl m-auto">
      <PodcastSidebar
        image={mock.artworkUrl600}
        title={mock.title}
        author={mock.artistName}
        description={mock.description}
        setIsLoading={setIsLoading}
      />
      <div className="flex flex-col gap-y-5">
        <div className="p-3 round shadow">
          <Typography variant={Variants.Base215} color={Colors.Gray500}>
            <FormattedMessage {...message.episodes} />: {mock.episodes.length}
          </Typography>
        </div>
        {mock.episodes.length && (
          <div className="p-3 round shadow">
            <Table episodes={mock.episodes} podcastId={mock.id} setIsLoading={setIsLoading} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Podcast;
