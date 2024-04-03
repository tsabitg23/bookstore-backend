import { MigrationInterface, QueryRunner } from "typeorm";

export class BookTags1698321500517 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      ` 
          --Table Definition
          CREATE TABLE "book_tags"  (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "book_id" uuid NOT NULL,
            "tag_id" uuid NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            CONSTRAINT "PK_cace4a159ff9f2512dd42373763" PRIMARY KEY ("id"),
            CONSTRAINT "FK_book_id" FOREIGN KEY ("book_id") REFERENCES "books"("id"),
            CONSTRAINT "FK_tag_id" FOREIGN KEY ("tag_id") REFERENCES "tags"("id")
          )
          `
    ),
      undefined;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "book_tags"`, undefined);
  }
}
