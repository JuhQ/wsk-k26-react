import { useCallback, useEffect, useState } from 'react';

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

  const postMedia = async (file, inputs, token) => {
    const data = {
      ...inputs,
      ...file,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };

    return await fetchData(import.meta.env.VITE_MEDIA_API + '/media', options);
  };

  const deleteMedia = async (id, token) => {
    const options = {
      headers: {
        authorization: 'Bearer ' + token,
      },
      method: 'DELETE',
    };
    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media/' + id,
      options,
    );
  };

  const modifyMedia = async (id, inputs, token) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media/' + id,
      options,
    );
  };

  return { mediaArray, postMedia, deleteMedia, modifyMedia };
};

const useUser = () => {
  const postUser = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(import.meta.env.VITE_AUTH_API + '/users', options);
  };

  const checkUser = async (username) => {
    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/username/' + username,
    );
  };

  const getUserByToken = useCallback(async (token) => {
    const options = {
      headers: {
        authorization: 'Bearer ' + token,
      },
    };
    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
      options,
    );
  }, []);

  return { postUser, checkUser, getUserByToken };
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions,
    );
  };

  return { postLogin };
};

const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();
    formData.append('file', file);

    const fetchOptions = {
      method: 'POST',
      headers: {
        // huom tähän ei content-type headeria
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    return await fetchData(
      import.meta.env.VITE_UPLOAD_SERVER + '/upload',
      fetchOptions,
    );
  };

  return { postFile };
};

const useLike = () => {
  const postLike = async (media_id, token) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ media_id }),
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/likes',
      fetchOptions,
    );
  };

  const deleteLike = async (like_id, token) => {
    console.log('delete', like_id);
    const fetchOptions = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/likes/' + like_id,
      fetchOptions,
    );
  };

  const getUserLike = async (media_id, token) => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/likes/bymedia/user/' + media_id,
      fetchOptions,
    );
  };

  const getLikesCount = async (media_id) => {
    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/likes/count/' + media_id,
    );
  };

  return { postLike, deleteLike, getUserLike, getLikesCount };
};

export { useMedia, useUser, useAuthentication, useFile, useLike };
