import Link from "next/link";
import Layout from "../components/Layout";

export default function Index() {
  const ping = () => {
    global.ipcRenderer.send("test", { msg: "enviado ping para o main" });
  };

  return (
    <Layout>
      <h1>Home</h1>
      <button onClick={ping}>PING</button>
    </Layout>
  );
}
