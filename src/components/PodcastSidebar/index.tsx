import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import Typography, { Colors, Variants } from '@components/commons/Typography';

import message from './PodcastSidebar.message';

type podcastSidebarType = {
  image: string;
  title: string;
  author: string;
  description: string;
  setIsLoading: (isLoading: boolean) => void;
  podcastId?: number;
};

const PodcastSidebar = ({ image, title, author, description, setIsLoading, podcastId }: podcastSidebarType): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (podcastId) {
      setIsLoading(true);
      navigate(`/podcast/${podcastId}`);
    }
  };

  return (
    <div className="p-3 round- shadow flex flex-col gap-4 max-w-56">
      <div onClick={() => handleClick()} className={`flex flex-col gap-4 justify-center ${podcastId ? 'cursor-pointer' : ''}`}>
        <div>
          <img src={image} alt="podcast image" />
        </div>
        <div className="border-b-2 border-b-solid"></div>
        <div className="flex flex-col gap-y-1">
          <Typography variant={Variants.Base110}>{title}</Typography>
          <Typography variant={Variants.Base108} color={Colors.Gray500} style={{ fontStyle: 'italic' }}>
            <FormattedMessage {...message.by} /> {author}
          </Typography>
        </div>
        <div className="border-b-2 border-b-solid"></div>
      </div>
      <div className="flex flex-col gap-y-2">
        <Typography variant={Variants.Base110}>
          <FormattedMessage {...message.description} />:
        </Typography>
        <Typography variant={Variants.Base108} color={Colors.Gray500} style={{ fontStyle: 'italic' }}>
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default PodcastSidebar;
