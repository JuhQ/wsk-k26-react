import { Link } from 'react-router';

const MediaItem = ({ item, setSelectedItem }) => {
  return (
    <tr key={item.filename}>
      <td>
        <Link to="/single" state={{ item }}>
          Klikkaa auki
        </Link>
        <img src={item.thumbnail} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.created_at}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>{item.username}</td>
    </tr>
  );
};

export default MediaItem;
