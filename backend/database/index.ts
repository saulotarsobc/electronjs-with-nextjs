import { DataSource } from "typeorm";

import databasePath from "../utils/databasePath";

import { Leads } from "./entitys/Leads";
import { LeadsNotes } from "./entitys/LeadsNotes";
import { Notes } from "./entitys/Notes";
import { User } from "./entitys/User";

export const database = new DataSource({
  type: "sqlite",
  database: databasePath,
  entities: [User, Notes, LeadsNotes, Leads],
  synchronize: true,
});
