import MediaItem from "./MediaItem";
import MyComponent from "./MyComponent";
import SingleView from "./SingleView";
import { useState } from "react";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const mediaArray = [
    {
      media_id: 8,
      user_id: 5,
      filename: "https://place-hold.it/1200x800.jpg&text=Pic1&fontsize=120",
      thumbnail: "https://placecats.com/200/200",
      filesize: 170469,
      media_type: "image/jpeg",
      title: "Picture 1",
      description: "This is a placeholder picture.",
      created_at: "2024-01-07T20:49:34.000Z",
    },
    {
      media_id: 9,
      user_id: 7,
      filename: "https://place-hold.it/800x600.jpg&text=Pic2&fontsize=72",
      thumbnail: "https://placecats.com/300/200",
      filesize: 1002912,
      media_type: "image/jpeg",
      title: "Pic 2",
      description: "",
      created_at: "2024-01-07T21:32:27.000Z",
    },
    {
      media_id: 17,
      user_id: 2,
      filename:
        "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1761839258239-2be2146f1605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filesize: 1236616,
      media_type: "video/mp4",
      title: "Bunny",
      description: "Butterflies fly around the bunny.",
      created_at: "2024-01-07T20:48:13.000Z",
    },
  ];

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
