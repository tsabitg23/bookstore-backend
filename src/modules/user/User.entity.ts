import {
  Entity,
  Column,
} from "typeorm";
import { BaseEntity } from "../../helpers/Base.entity";

@Entity({ name: "users" })
export class User extends BaseEntity{
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: "user" })
  role: string;
}
