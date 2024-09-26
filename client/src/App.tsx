import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState([]); // Updated to handle people data

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setPeople(response.data.people); // Updated to get people data
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        {people.length > 0 ? (
  <div className="card-container">
    {people.map((person, index) => (
      <div className="card" key={index}>
        <h2>{person.name}</h2>
        <p>Age: {person.age}</p>
        <p>Gender: {person.gender}</p>
      </div>
    ))}
  </div>
) : (
  <p>Loading...</p>
)}

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;