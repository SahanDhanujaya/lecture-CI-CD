import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:5000/")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="m-4 flex flex-col items-center">
        {data.map((item, index) => (
          <div className="shadow p-4 m-4 rounded bg-white" key={index}>
            <h1 className="text-2xl">{item.name}</h1>
            <p className="">{item.email}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
