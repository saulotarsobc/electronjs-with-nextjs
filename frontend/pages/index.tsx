import { useState } from "react";

export default function Index() {
  const [Users, setUsers] = useState([]);

  return (
    <main>
      <h1>Home</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          const data = await global.api.db.createUser({
            firstName: "Saulo",
            lastName: "Costa",
          });
          setUsers(data);
        }}
      >
        Criar user
      </button>

      <hr />
      <pre className="bg-slate-500">{JSON.stringify(Users, null, 4)}</pre>
      <hr />
    </main>
  );
}
