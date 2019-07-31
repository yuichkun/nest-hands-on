import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  findAll(): string {
    return 'This returns everyone\'s book';
  }
  @Get('mine')
  findMine(): string {
    return 'This is my book';
  }
}
