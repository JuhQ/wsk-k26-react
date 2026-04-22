import { useEffect, useState } from 'react';
import { useLike } from '../hooks/apiHooks';

const Likes = ({ media_id }) => {
  const [likes, setLikes] = useState(0);
  const [userLike, setuserLike] = useState(false);
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
      console.log(userLikeResponse);
    };

    fetchUserLike();
  }, []);

  const handleClick = async () => {
    try {
      if (userLike) {
        const deleteResult = await deleteLike(like_id, token);
        console.log(deleteResult);
        setuserLike(false);
      } else {
        const postResult = await postLike(media_id, token);
        console.log(postResult);
        setuserLike(true);
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
