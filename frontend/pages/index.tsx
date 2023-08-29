import Header from "../components/Header";
import { useState } from "react";

export default function Index() {
  const [Files, setFiles] = useState(":-)");

  const ping = () => {
    global.ipcRenderer.send("test", { msg: "enviado ping para o main" });
  };

  const chooseFiles = () => {
    const data = global.ipcRenderer.sendSync("chooseFiles");
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
