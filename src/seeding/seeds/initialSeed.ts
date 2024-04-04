import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Tag } from "../../entity/Tag.entity";
import { Book } from "../../entity/Book.entity";


export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const tags = await factory(Tag)().createMany(10);
    await factory(Book)()
      .map(async (book) => {
        // randomize two book tags
        const randomTags = tags.sort(() => 0.5 - Math.random()).slice(0, 2);    
        book.tags = randomTags;
        return book;
      })
      .createMany(100);
  }
}