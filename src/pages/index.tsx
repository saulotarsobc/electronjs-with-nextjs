export default function Home() {
  const addUser = () => {
    const data = window.api.sendSync("add-user", {
      name: "Saulo Costa",
    });

    console.log(data);
  };

  return (
    <main>
      <button onClick={addUser}>addUser</button>
    </main>
  );
}
