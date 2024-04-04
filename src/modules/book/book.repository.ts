import { AppDataSource } from "../../data-source";
import { Book } from "./book.entity";

export const BookRepository = AppDataSource.getRepository(Book);