import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div>
        {data && data.entries.length > 0 && data.entries.map((item) => <p>{JSON.stringify(item)}</p>)}
      </div>
    </div>
  );
}

export default App;
