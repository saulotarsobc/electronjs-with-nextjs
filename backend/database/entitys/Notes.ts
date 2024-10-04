import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "notes",
  comment: "Notes table",
})
export class Notes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;
}
