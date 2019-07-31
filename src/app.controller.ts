import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('random-number')
  getNumber(): number {
    return this.appService.getFuga();
  }

  @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
  @Get('error')
  mockError(): string {
    return 'error';
  }
}
