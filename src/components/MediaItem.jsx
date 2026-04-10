const MediaItem = ({ item, setSelectedItem }) => {
  return (
    <tr key={item.filename}>
      <td>
        <button
          onClick={() => {
            console.log("toimiiko?");
            setSelectedItem(item);
          }}
        >
          Klikkaa auki
        </button>
        <img src={item.thumbnail} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.created_at}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
    </tr>
  );
};

export default MediaItem;
