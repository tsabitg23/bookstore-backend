import { faker  as Faker} from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Book } from "../../modules/book/book.entity";

define(Book, (faker: typeof Faker) => {
  const book = new Book();
  book.title = faker.lorem.words(3);
  book.writer = faker.lorem.words(2);
  book.coverImage = 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg';
  book.price = Math.floor(Math.random() * 100) + 1;
  return book;
});