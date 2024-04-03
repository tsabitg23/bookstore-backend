import { BookRepository } from "../repositories/Book.repository"

export class BookService {
    static async getAllBooks() {
        return await BookRepository.find();
    }
}