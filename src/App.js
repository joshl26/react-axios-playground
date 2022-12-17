import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   axios.get("https://swapi.dev/api/people/").then((data) => {
  //     console.log(data);
  //     setPeople(data.data?.results);
  //   });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get("https://swapi.dev/api/people/");
        setPeople(data.data?.results);
      } catch (e) {
        setError("Something went wrong!");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {error && <h3>{error}</h3>}
      {people.length ? (
        <>
          {people.map((person, idx) => (
            <div key={idx}>{person.name}</div>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
