import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Leads } from "./Leads"; // Ajuste o caminho conforme necessário
import { Notes } from "./Notes"; // Ajuste o caminho conforme necessário
import { User } from "./User"; // Ajuste o caminho conforme necessário

@Entity({
  name: "leads_notes",
  comment: "Create relationship between users, leads, and notes",
})
export class LeadsNotes {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { nullable: false })
  user: User;

  @ManyToOne(() => Leads, (lead) => lead.id, { nullable: false })
  lead: Leads;

  @ManyToOne(() => Notes, (note) => note.id, { nullable: false })
  note: Notes;

  @CreateDateColumn()
  createdAt: Date;
}
