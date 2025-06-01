
export default function Home() {
  const addUser = async () => {
    await window.api.sendSync('add-user', {
      name: 'test',
      age: 12,
    });
  };

  return (
    <main>
      <button onClick={addUser}>addUser</button>
    </main>
  );
}
