const SingleView = (props) => {
  const { item, setSelectedItem } = props;

  if (!item) {
    return null;
  }

  return (
    <dialog open>
      <button
        onClick={() => {
          setSelectedItem(null);
        }}
      >
        Sulje
      </button>
      <img src={item.thumbnail} />
    </dialog>
  );
};

export default SingleView;
