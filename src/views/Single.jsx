import { useLocation, useNavigate } from 'react-router';
import Likes from '../components/Likes';

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { item } = state;

  if (!item) {
    return null;
  }

  console.log('item', item);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Takaisin</button>
      <h2>{item.title}</h2>
      <p>Owner: {item.username}</p>
      <img src={item.filename} alt={item.title} />
      <Likes media_id={item.media_id} />
      <p>{item.description}</p>
    </div>
  );
};
export default Single;
