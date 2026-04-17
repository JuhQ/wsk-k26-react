import { useMyContext } from "../contexts/MyContext";

const MyComponentB = () => {
  const { contextValue, setContext } = useMyContext();

  return (
    <div>
      <button onClick={() => setContext(+new Date())}>Aseta uusi arvo</button>
      Component B, context = {contextValue}
    </div>
  );
};

export default MyComponentB;
