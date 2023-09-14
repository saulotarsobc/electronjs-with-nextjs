import React, { useState } from "react";

export default function page2() {
  const [Files, setFiles] = useState(":-)");

  const chooseFiles = () => {
    const data = global.API.chooseFiles();
    setFiles(data);
  };

  return (
    <>
      <div>
        <h1>Pagina 2</h1>

        <hr />
        <h2>{Files}</h2>
        <button onClick={chooseFiles}>Escolher arquivos</button>
      </div>
    </>
  );
}
