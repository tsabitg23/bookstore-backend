import { BookRepository } from "./book.repository";
import { BookRequestDto } from "./dto/book-request.dto";


export class BookService {
    static async getAllBooks(request: BookRequestDto) {
        // get all books with pagination
        const { page = 1, limit = 10 } = request;
        const [books, count] = await BookRepository.findAndCount({
            skip: (+page - 1) * +limit,
            take: +limit,
        });
        return {
            books,
            count,
            page,
            limit,
        };
    }
}