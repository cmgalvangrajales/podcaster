import dayjs from 'dayjs';
import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { episodeInterface } from '@services/Podcast';

import message from '../../Podcast.message';

type tableType = {
  episodes: episodeInterface[];
  setIsLoading: (isLoading: boolean) => void;
};

const Table = ({ episodes, setIsLoading }: tableType): React.ReactNode => {
  const intl = useIntl();
  const timestamp = dayjs();

  if (!episodes) {
    return null;
  }

  const getRows = (episodes) => {
    return episodes.map(({ trackId, trackName, releaseDate, trackTimeMillis, collectionId }) => (
      <tr key={trackId} className="odd:bg-white even:bg-slate-50">
        <td className="block max-w-lg">
          <Link
            onClick={() => setIsLoading(true)}
            to={`/podcast/${collectionId}/episode/${trackId}`}
            className="text-sky-700 block hover:text-sky-400 whitespace-nowrap w-full overflow-hidden text-ellipsis"
          >
            {trackName}
          </Link>
        </td>
        <td>{dayjs(releaseDate).format('D/M/YYYY')}</td>
        <td>{timestamp.add(trackTimeMillis, 'millisecond').format('HH:mm:ss')}</td>
      </tr>
    ));
  };

  return (
    <table className="table-auto w-full" data-testid="episodes">
      <thead>
        <tr className="text-left">
          <th>{intl.formatMessage(message.title)}</th>
          <th>{intl.formatMessage(message.date)}</th>
          <th>{intl.formatMessage(message.duration)}</th>
        </tr>
      </thead>
      <tbody>{getRows(episodes)}</tbody>
    </table>
  );
};

export default Table;
