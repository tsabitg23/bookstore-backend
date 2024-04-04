import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "./Base.entity";
import { Tag } from "./Tag.entity";

@Entity({ name: "books" })
export class Book extends BaseEntity{
    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    writer: string;

    @Column({ nullable: false })
    coverImage: string;

    @Column({ type: "numeric", precision: 12, scale: 2 })
    price: number;

    @ManyToMany(() => Tag, (tag) => tag.books)
    @JoinTable({
        name: "book_tags",
        joinColumn: {
            name: "bookId",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "tagId",
            referencedColumnName: "id"
        }
    })
    tags?: Tag[];
}