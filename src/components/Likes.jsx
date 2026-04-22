import { useEffect, useState } from 'react';
import { useLike } from '../hooks/apiHooks';

const Likes = ({ media_id }) => {
  const [likes, setLikes] = useState(0);
  const [userLike, setUserLike] = useState(null);
  const [updateLike, setUpdateLike] = useState(false);
  const { getLikesCount, postLike, deleteLike, getUserLike } = useLike();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getLikes = async () => {
      const likeResponse = await getLikesCount(media_id);
      setLikes(likeResponse.count);
    };

    getLikes();
  }, [userLike]);

  useEffect(() => {
    const fetchUserLike = async () => {
      const userLikeResponse = await getUserLike(media_id, token);
      setUserLike(userLikeResponse);
    };

    fetchUserLike();
  }, [updateLike]);

  console.log('userLike', userLike);

  const handleClick = async () => {
    try {
      console.log('wtf', userLike);
      if (userLike) {
        const deleteResult = await deleteLike(userLike.like_id, token);
        console.log(deleteResult);
        setUserLike(null);
        setUpdateLike((updateLike) => {
          return !updateLike;
        });
      } else {
        const postResult = await postLike(media_id, token);
        console.log(postResult);
        setUpdateLike((updateLike) => {
          return !updateLike;
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="my-2.5 block w-4/5 rounded-md bg-stone-500 text-stone-50 hover:bg-stone-700 transition-all duration-500 ease-in-out p-2.5"
    >
      {likes}
    </button>
  );
};

export default Likes;
