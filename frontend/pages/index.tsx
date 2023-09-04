import Header from "../components/Header";
import { useState } from "react";

const { API } = global as any;

console.log(API);

export default function Index() {
  const [Files, setFiles] = useState(":-)");

  return (
    <>
      <Header />
      <h1>Home</h1>

      <hr />
      <h2>{Files}</h2>
      <button
        onClick={() => {
          const data = API.chooseFiles();
          setFiles(data);
        }}
      >
        Escolher arquivos
      </button>
    </>
  );
}
