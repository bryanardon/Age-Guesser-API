import { useState, useEffect } from "react";
import "./App.css";
import Title from "./Title.js";
import Form from "./Form.js";
import Info from "./Info.js";

export default function App() {
  const [name, setName] = useState(" ");
  const [data, setData] = useState(" ");
  useEffect(() => {
    const url = `https://api.agify.io/?name=${name.toLowerCase()}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(null));
  }, [name]);
  return (
    <div className="App">
      <Title title="Age Guesser" />
      <Form setName={setName} />
      <Info data={data} />
    </div>
  );
}
