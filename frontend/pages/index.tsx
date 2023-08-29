import Header from "../components/Header";
import { useState } from "react";

export default function Index() {
  const [Files, setFiles] = useState(":-)");

  const ping = () => {
    // global.ipcRenderer.send("test", { msg: "enviado ping para o main" });
    global.API.ping();
  };

  const chooseFiles = () => {
    const data = global.API.chooseFiles();
    setFiles(data);
  };

  return (
    <>
      <Header />
      <h1>Home</h1>

      <hr />
      <h2>Ping</h2>
      <button onClick={ping}>PING</button>

      <hr />
      <h2>{Files}</h2>
      <button onClick={chooseFiles}>Escolher arquivos</button>
    </>
  );
}
