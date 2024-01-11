import { Link } from 'react-router-dom';

interface HomeInterface {
  setIsLoading: (isLoading: boolean) => void;
}

const Home = ({ setIsLoading }: HomeInterface): JSX.Element => {
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
