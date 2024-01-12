import { useRef } from 'react';
import { useIntl } from 'react-intl';

import { podcastInterface } from '@services/Podcasts';

import messages from '../../Home.message';

type FilterType = {
  filteredPodcasts: podcastInterface[];
  handleFilterChange: (value: string | undefined) => void;
};

const SearchFilter = ({ filteredPodcasts, handleFilterChange }: FilterType): JSX.Element => {
  const intl = useIntl();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center justify-end">
      <div className="rounded bg-blue-400 text-white px-2">{filteredPodcasts.length}</div>
      <input
        className="border-2 border-solid ml-2 rounded border-gray-700 p-2"
        type="text"
        name="podcasts-filter"
        onChange={(e) => handleFilterChange(e.currentTarget.value)}
        ref={inputRef}
        placeholder={intl.formatMessage(messages.filterPlaceholder)}
      />
    </div>
  );
};

export default SearchFilter;
