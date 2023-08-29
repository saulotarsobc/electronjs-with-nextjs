import Header from "../components/Header";
import { useState } from "react";

export default function Index() {
  const [Files, setFiles] = useState(":-)");

  const chooseFiles = () => {
    const data = global.API.chooseFiles();
    setFiles(data);
  };

  return (
    <>
      <Header />
      <h1>Home</h1>

      <hr />
      <h2>{Files}</h2>
      <button onClick={chooseFiles}>Escolher arquivos</button>
    </>
  );
}
