import { AppDataSource } from "../data-source";
import { Book } from "../entity/Book.entity";

export const BookRepository = AppDataSource.getRepository(Book);