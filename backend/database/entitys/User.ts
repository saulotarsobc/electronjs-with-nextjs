import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LeadsNotes } from "./LeadsNotes";

@Entity({
  name: "users",
  comment: "Users table",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToMany(() => LeadsNotes, (leadsNotes) => leadsNotes.user)
  leadsNotes: LeadsNotes[];
}
