import {useState} from "react";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/card/Card";
import data from "./asserts/data";
import { CategoryContext } from "./contexts/CategoryContext";
function App() {
  const [category, setCategory] = useState("Beaches");
  return (
    <div>
      <CategoryContext.Provider value={{category, setCategory}}>
        <NavBar />
        <div className="content">
        {
          data[category].map((place) => {
            return(
              <Card name={place.name} imageUrl={place.imageUrl} location={place.location} info={place.info} />
            )
          })
        }
      </div>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
