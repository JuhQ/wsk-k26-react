import { useState } from "react";

const MyComponent = () => {
  const [tila, setTila] = useState("hevonen");
  const [toinenTila, setToinenTila] = useState(0);

  // Sori Ilkka :(
  if (tila === "hevonen kissa") {
    return <h1>Hevonen ja kissa</h1>;
  }

  return (
    <div>
      <p>You clicked {tila} times</p>
      <p>Toinen tila: {toinenTila}</p>
      <button onClick={() => setTila(tila + " kissa")}>Click me</button>
      <button onClick={() => setToinenTila(toinenTila + 1)}>
        Päivitä toinen tila
      </button>
    </div>
  );
};

export default MyComponent;
