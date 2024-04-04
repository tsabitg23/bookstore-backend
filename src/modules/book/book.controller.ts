import { Request, Response } from "express";
import { BookService } from "./book.service";

export class BookController {
    static async getAllBook(req: Request, res: Response){
        const books = await BookService.getAllBooks();
        return res.status(200).json({data: books});
    }
}