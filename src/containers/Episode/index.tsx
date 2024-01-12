type EpisodeInterface = {
  setIsLoading: (isLoading: boolean) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Episode = ({ setIsLoading }: EpisodeInterface): JSX.Element => {
  return <div>Future content goes here</div>;
};

export default Episode;
