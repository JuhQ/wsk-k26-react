import { useMyContext } from "../contexts/MyContext";

const MyComponentA = () => {
  const { contextValue } = useMyContext();

  return <div>Component A, context = {contextValue}</div>;
};

export default MyComponentA;
