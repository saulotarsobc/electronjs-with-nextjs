import Header from "../components/Header";
import { useState } from "react";

export default function Index() {
  const [Message, setMessage] = useState(":-)");
  const [Files, setFiles] = useState(":-)");

  const ping = () => {
    global.ipcRenderer.send("test", { msg: "enviado ping para o main" });
  };

  const chooseFiles = () => {
    const data = global.ipcRenderer.sendSync("chooseFiles");
    setFiles(data);
  };

  const onClickWithIpcSync = () => {
    const data = global.ipcRenderer.sendSync(
      "ping-pong-sync",
      "some data from ipcRenderer"
    );
    setMessage(data);
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

      <hr />
      <h2>{Message}</h2>
      <button onClick={onClickWithIpcSync}>onClickWithIpcSync</button>
    </>
  );
}
