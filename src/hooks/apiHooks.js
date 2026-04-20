import { useCallback, useEffect, useState } from "react";

import { fetchData } from "../utils/fetchData";

const useMedia = (loadMedia = true) => {
  const [mediaArray, setMediaArray] = useState([]);
  useEffect(() => {
    const getMedia = async () => {
      try {
        // hae mediat
        const mediaItems = await fetchData(
          import.meta.env.VITE_MEDIA_API + "/media",
        );
        // hae medioihin käyttäjätiedot
        const mediaWithUsers = await Promise.all(
          mediaItems.map(async (item) => {
            const user = await fetchData(
              import.meta.env.VITE_AUTH_API + "/users/" + item.user_id,
            );
            item.username = user.username;
            return item;
          }),
        );

        console.log(mediaWithUsers);

        setMediaArray(mediaWithUsers);
      } catch (error) {
        console.error("fetchData: " + error.message);
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };

    return await fetchData(import.meta.env.VITE_MEDIA_API + "/media", options);
  };

  return { mediaArray, postMedia };
};

const useUser = () => {
  const postUser = async (inputs) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(import.meta.env.VITE_AUTH_API + "/users", options);
  };

  const checkUser = async (username) => {
    return await fetchData(
      import.meta.env.VITE_AUTH_API + "/users/username/" + username,
    );
  };

  const getUserByToken = useCallback(async (token) => {
    const options = {
      headers: {
        authorization: "Bearer " + token,
      },
    };
    return await fetchData(
      import.meta.env.VITE_AUTH_API + "/users/token",
      options,
    );
  }, []);

  return { postUser, checkUser, getUserByToken };
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };
    return await fetchData(
      import.meta.env.VITE_AUTH_API + "/auth/login",
      fetchOptions,
    );
  };

  return { postLogin };
};

const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();
    formData.append("file", file);

    const fetchOptions = {
      method: "POST",
      headers: {
        // huom tähän ei content-type headeria
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    return await fetchData(
      import.meta.env.VITE_UPLOAD_SERVER + "/upload",
      fetchOptions,
    );
  };

  return { postFile };
};

export { useMedia, useUser, useAuthentication, useFile };
