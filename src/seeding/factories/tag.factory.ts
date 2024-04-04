import { faker  as Faker} from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Tag } from '../../modules/tag/Tag.entity';

define(Tag, (faker: typeof Faker) => {
  const tag = new Tag();
  tag.name = faker.lorem.words(1);
  return tag;
});