import React, { useState } from "react";

export default function page2() {
  const [Files, setFiles] = useState([]);

  const chooseFiles = () => {
    const { canceled, filePaths } = global.api.sys.chooseFiles();
    !canceled ? setFiles(filePaths) : null;
    console.log(filePaths);
  };

  return (
    <>
      <div>
        <h1>Arquivos</h1>

        <h2>Integração com sistema de arquivos</h2>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={chooseFiles}
        >
          Escolher arquivos
        </button>
        <hr />
        {Files.map((file: string, index: number) => (
          <pre key={index}>{file}</pre>
        ))}
        <hr />
      </div>
    </>
  );
}
