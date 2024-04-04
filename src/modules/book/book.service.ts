import { BookRepository } from "./book.repository";


export class BookService {
    static async getAllBooks() {
        return await BookRepository.find();
    }
}