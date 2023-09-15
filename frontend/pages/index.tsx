import { useState } from "react";

export default function Index() {
  const [Users, setUsers] = useState([]);

  return (
    <>
      <h1>Home</h1>

      <button
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
      <pre>{JSON.stringify(Users, null, 4)}</pre>
      <hr />
    </>
  );
}
