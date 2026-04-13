import MediaItem from '../components/MediaItem';
import MyComponent from '../components/MyComponent';
import SingleView from '../components/SingleView';
import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
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

    getMedia();
  }, []);

  console.log(mediaArray);

  return (
    <>
      <h2>My media</h2>
      <MyComponent />

      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />

      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaItem
              key={item.filename}
              setSelectedItem={setSelectedItem}
              item={item}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
