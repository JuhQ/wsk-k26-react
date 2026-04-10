import "./App.css";

import Home from "./components/Home";

const App = (props) => {
  return (
    <>
      <h1 className="hero-title">
        My App {props.name} - {props.toinen}
      </h1>
      <Home />
    </>
  );
};
export default App;
