import { readdir, readFile } from "fs/promises";
import { join } from "path";

export const getSqlQueries = async (folder: string) => {
  try {
    const diretorios = await readdir(folder, { withFileTypes: true });

    const migrations = [];

    for (const diretorio of diretorios) {
      if (diretorio.isDirectory()) {
        const nomeDiretorio = diretorio.name;
        const caminhoArquivoSql = join(folder, nomeDiretorio, "migration.sql");

        try {
          const conteudoSql = await readFile(caminhoArquivoSql, "utf-8");
          migrations.push({ nomeDiretorio, conteudoSql });
        } catch (err) {
          console.error(
            `Erro ao ler o arquivo 'migration.sql' no diretório '${nomeDiretorio}':`,
            err
          );
        }
      }
    }

    return migrations;
  } catch (err) {
    console.error('Erro ao listar diretórios na pasta "migrations":', err);
    return null;
  }
};
