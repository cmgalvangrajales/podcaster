import dayjs from 'dayjs';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { episodeInterface } from '@services/Podcast';

import message from '../../Podcast.message';

type tableType = {
  episodes: episodeInterface[];
  podcastId: number;
};

const Table = ({ episodes, podcastId }: tableType): JSX.Element => {
  const intl = useIntl();
  const timestamp = dayjs();

  const getRows = (episodes) => {
    return episodes.map((episode) => (
      <tr key={episode.trackId} className="odd:bg-white even:bg-slate-50">
        <td className="block max-w-lg">
          <Link
            to={`/podcast/${podcastId}/episode/${episode.trackId}`}
            className="text-sky-700 block hover:text-sky-400 whitespace-nowrap w-full overflow-hidden text-ellipsis"
          >
            {episode.trackName}
          </Link>
        </td>
        <td>{dayjs(episode.releaseDate).format('D/M/YYYY')}</td>
        <td>{timestamp.add(episode.trackTimeMillis, 'millisecond').format('HH:mm:ss')}</td>
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
