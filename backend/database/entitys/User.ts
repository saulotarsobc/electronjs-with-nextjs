import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  // @OneToMany(() => LeadsNotes, (leadsNotes) => leadsNotes.user)
  // leadsNotes: LeadsNotes[];
}
