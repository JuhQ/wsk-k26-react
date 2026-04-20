import { Link } from 'react-router';
import { useUserContext } from '../hooks/contextHooks';

const MediaItem = ({ item, setSelectedItem }) => {
  const { user } = useUserContext();
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
      <td className="flex flex-col">
        {user &&
          (item.user_id === user.user_id || user.level_name === 'Admin') && (
            <>
              <button className="block w-full text-center bg-stone-500 text-stone-50 rounded-md p-2.5 my-2.5">
                Modify
              </button>
              <button className="block w-full text-center bg-orange-500 text-stone-50 rounded-md p-2.5 my-2.5">
                Delete
              </button>
            </>
          )}
      </td>
    </tr>
  );
};

export default MediaItem;
