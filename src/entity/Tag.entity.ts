import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntity } from "./Base.entity";
import { Book } from "./Book.entity";

@Entity({ name: "tags" })
export class Tag extends BaseEntity{
    @Column({ nullable: false })
    name: string;

    @ManyToMany(() => Book, (book) => book.tags)
    books?: Book[];
}