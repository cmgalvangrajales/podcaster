import { useNavigate } from 'react-router-dom';

import { podcastInterface } from '@services/Podcasts';

import Typography, { Colors, Variants } from '@components/commons/Typography';

import PodcastStyles from './PodcastCard.styles';

type CardType = {
  podcasts: podcastInterface[];
  setIsLoading: (isLoading: boolean) => void;
};

const CardContainer = ({ podcasts, setIsLoading }: CardType) => {
  const navigate = useNavigate();

  const handleRedirect = (podcastId: string) => {
    setIsLoading(true);
    navigate(`/podcast/${podcastId}`);
  };

  const cardGenerator = (podcasts) => {
    const cardTextStyles = 'align-center whitespace-nowrap w-full overflow-hidden text-ellipsis text-center';
    return podcasts.map((podcast) => (
      <div
        className="shadow p-3 rounded relative min-h-28 flex items-end justify-center cursor-pointer"
        key={podcast.id.attributes['im:id']}
        onClick={() => {
          handleRedirect(podcast.id.attributes['im:id']);
        }}
      >
        <PodcastStyles.ImageContainer>
          <img src={`${podcast['im:image'][2].label}`} />
        </PodcastStyles.ImageContainer>
        <div className="flex flex-col max-w-full">
          <div className={cardTextStyles}>
            <Typography variant={Variants.Base110}>{podcast.title.label}</Typography>
          </div>
          <div className={cardTextStyles}>
            <Typography variant={Variants.Base108} color={Colors.Gray500}>
              {podcast['im:artist'].label}
            </Typography>
          </div>
        </div>
      </div>
    ));
  };

  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-20 mt-20">{cardGenerator(podcasts)}</div>;
};

export default CardContainer;
