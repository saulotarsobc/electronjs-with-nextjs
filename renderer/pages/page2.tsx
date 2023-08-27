import React from "react";
import Layout from "../components/Layout";

export default function page2() {
  const ping = () => {
    global.ipcRenderer.send("test", { msg: "enviado ping para o main" });
  };

  return (
    <Layout>
      <h1>Pagina 2</h1>

      <button onClick={ping}>Testa o ping tbm</button>
    </Layout>
  );
}
