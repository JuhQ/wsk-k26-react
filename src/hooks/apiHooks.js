import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

const useMedia = (loadMedia = true) => {
  const [mediaArray, setMediaArray] = useState([]);
  useEffect(() => {
    const getMedia = async () => {
      try {
        // hae mediat
        const mediaItems = await fetchData(
          import.meta.env.VITE_MEDIA_API + '/media',
        );
        // hae medioihin käyttäjätiedot
        const mediaWithUsers = await Promise.all(
          mediaItems.map(async (item) => {
            const user = await fetchData(
              import.meta.env.VITE_AUTH_API + '/users/' + item.user_id,
            );
            item.username = user.username;
            return item;
          }),
        );

        console.log(mediaWithUsers);

        setMediaArray(mediaWithUsers);
      } catch (error) {
        console.error('fetchData: ' + error.message);
      }
    };
    if (loadMedia) {
      getMedia();
    }
  }, [loadMedia]);
  return { mediaArray };
};

export { useMedia };
