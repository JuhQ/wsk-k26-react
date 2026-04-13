import MediaItem from "../components/MediaItem";
import MyComponent from "../components/MyComponent";
import SingleView from "../components/SingleView";
import { useState } from "react";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const mediaArray = [
    {
      media_id: 8,
      user_id: 5,
      filename:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      filename:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      // huom tämä on video, ei kuva, alla olevat urlit väärin siis
      filename:
        "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      thumbnail:
        "https://images.unsplash.com/photo-1551272744-19456affaa89?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
