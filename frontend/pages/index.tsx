import Header from "../components/Header";

export default function Index() {
  const ping = () => {
    global.ipcRenderer.send("test", { msg: "enviado ping para o main" });
  };

  return (
    <>
      <Header />
      <h1>Home</h1>
      <button onClick={ping}>PING</button>
    </>
  );
}
