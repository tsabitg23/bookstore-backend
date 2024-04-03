import { MigrationInterface, QueryRunner } from "typeorm";

export class Book1698321500516 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      ` 
          --Table Definition
          CREATE TABLE "books"  (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "title" character varying NOT NULL,
            "writer" character varying NOT NULL,
            "cover_image" character varying NOT NULL,
            "price" DECIMAL(12,2) NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            CONSTRAINT "PK_cace4a159ff9f2512dd42373762" PRIMARY KEY ("id")
          )
          `
    ),
      undefined;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "books"`, undefined);
  }
}
