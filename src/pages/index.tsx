import { CreateUserResponse, User } from "@/interfaces";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  const addUser = () => {
    const response = window.api.sendSync("add-user", {
      name: "Saulo Costa",
    }) as CreateUserResponse;

    if (!response) {
      alert("Error adding user!");
      return;
    }

    if (!response.error) {
      setUser(response.data);
    } else {
      alert("Error adding user!");
    }
  };

  return (
    <main>
      <div className="container">
        <h1>Welcome 👋</h1>
        <p>Add a new user to the system.</p>
        <button onClick={addUser}>Add User</button>

        {user && (
          <div className="user-card">
            <h2>User Added:</h2>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Created at:</strong>{" "}
              {new Date(user.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Last update:</strong>{" "}
              {new Date(user.updateTimestamp).toLocaleString()}
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        main {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: "Segoe UI", sans-serif;
        }

        .container {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          text-align: center;
          width: 100%;
          max-width: 500px;
        }

        h1 {
          margin-bottom: 12px;
          color: #333;
        }

        p {
          margin-bottom: 24px;
          color: #666;
        }

        button {
          background-color: #667eea;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #5a67d8;
        }

        .user-card {
          margin-top: 30px;
          text-align: left;
          background-color: #f7fafc;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .user-card h2 {
          margin-bottom: 12px;
          color: #2d3748;
        }

        .user-card p {
          margin: 6px 0;
          color: #4a5568;
        }
      `}</style>
    </main>
  );
}
