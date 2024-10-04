import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "leads",
  comment: "Leads table",
})
export class Leads {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
