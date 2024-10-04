import { DataSource } from "typeorm";

import databasePath from "../utils/databasePath";

import { LeadsNotes } from "./entitys/LeadsNotes";
import { Notes } from "./entitys/Notes";
import { User } from "./entitys/User";

export const database = new DataSource({
  type: "sqlite",
  database: databasePath,
  entities: [User, Notes, LeadsNotes],
  synchronize: true,
});

// Função para deletar tabelas não utilizadas
export async function dropUnusedTables() {
  const connection = await database.initialize();

  const queryRunner = connection.createQueryRunner();

  // Lista de tabelas que você quer manter
  const tablesToKeep = ["User", "Notes", "LeadsNotes"];

  const allTables = await queryRunner.getTables();

  for (const table of allTables) {
    if (!tablesToKeep.includes(table.name)) {
      await queryRunner.dropTable(table);
      console.log(`Tabela ${table.name} deletada.`);
    }
  }

  await queryRunner.release();
  await connection.destroy();
}
