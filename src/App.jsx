import { useState } from "react";
import "./App.css";
import data from "./data";
import Tours from "./component/Tours";

function App() {
  const [tours, setTours] = useState(data);

  // tours ke data ko remove krne ka logic//

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  // ye refresh ha logic age tours ka data ka lenght===0 ho to phir data refresh ho jaye

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2 style={{ fontSize: "4rem" }}>EK BAR PATNA AAO TO❤️😊!</h2>
        <button className="btn" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  // app wale component ke ander aapko ek div ke ander  tours ka pura ka pura  custom components place kr diya


  return (
    <>
      <div className="App">
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    </>
  );
}

export default App;
