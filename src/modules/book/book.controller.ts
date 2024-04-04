import { Request, Response } from "express";
import { BookService } from "./book.service";

class BookRequestDto {
    page: string;
    limit: string;
}

export class BookController {
    static async getAllBook(req: Request, res: Response){
        const { page='', limit='' } = req.query;
        const books = await BookService.getAllBooks({page: page.toString(), limit: limit.toString()});
        return res.status(200).json(books);
    }
}