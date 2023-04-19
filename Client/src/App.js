import "./App.css";
import { useState } from "react";

function App() {
  const [segitiga, setSegitiga] = useState(false);
  const [ganjil, setGanjil] = useState(false);
  const [prima, setPrima] = useState(false);

  const segitigaHandler = () => {
    setSegitiga(true);
    setGanjil(false);
    setPrima(false);
  };

  const ganjilHandler = () => {
    setSegitiga(false);
    setGanjil(true);
    setPrima(false);
  };

  const primalHandler = () => {
    setPrima(true);
    setGanjil(false);
    setSegitiga(false);
  };

  return (
    <div className="container">
      <form>
        <input type="text" name="nama" placeholder="Input Angka" />
      </form>
      <button onClick={segitigaHandler} type="text">
        Generate Segitiga
      </button>

      <button onClick={ganjilHandler} type="text">
        Generate Ganjil
      </button>
      <button onClick={primalHandler} type="text">
        Generate Ganjil
      </button>
      <h2>Result:</h2>
      {segitiga && <p>Jawaban Segitiga</p>}
      {ganjil && <p>Jawaban Bilangan Ganjil</p>}
      {prima && <p>Jawaban Bilangan Prima</p>}
    </div>
  );
}

export default App;
