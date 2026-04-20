import { Link } from 'react-router';
import { useUserContext } from '../hooks/contextHooks';
import { useMedia } from '../hooks/apiHooks';

const MediaItem = ({ item, setSelectedItem }) => {
  const { user } = useUserContext();
  const { deleteMedia } = useMedia();

  const deleteItem = async () => {
    try {
      if (confirm('Poistetaanko ' + item.title)) {
        const token = localStorage.getItem('token');
        await deleteMedia(item.media_id, token);
        alert(item.title + ' deleted');
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
              <button
                onClick={() => console.log('modify', item)}
                className="block w-full text-center bg-stone-500 text-stone-50 rounded-md p-2.5 my-2.5"
              >
                Modify
              </button>
              <button
                onClick={deleteItem}
                className="block w-full text-center bg-orange-500 text-stone-50 rounded-md p-2.5 my-2.5"
              >
                Delete
              </button>
            </>
          )}
      </td>
    </tr>
  );
};

export default MediaItem;
