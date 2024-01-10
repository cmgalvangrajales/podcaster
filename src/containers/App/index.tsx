import 'tailwindcss/tailwind.css';

import { Content, Header } from '@components/layout';

const App = () => {
  return (
    <div className="overflow-hidden grid gap-4">
      <Header />
      <Content />
    </div>
  );
};

export default App;
