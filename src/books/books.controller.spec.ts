import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';

describe('Books Controller', () => {
  let controller: BooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
    }).compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('/', async () => {
    expect(await controller.findAll()).toBe('This returns everyone\'s book');
  });

  test('/mine', async () => {
    expect(await controller.findMine()).toBe('This is my book');
  });

});
