
export default function Home() {
  const addUser = async () => {
    const data = await window.api.sendSync('add-user', {
      name: 'Saulo Costa',
    });

    console.log(data);
  };

  return (
    <main>
      <button onClick={addUser}>addUser</button>
    </main>
  );
}
