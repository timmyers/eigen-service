import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('space-fact')
  getSpaceFact() {
    return this.appService.getSpaceFact();
  }

  @Get('demo')
  getCoolDemo() {
    return this.appService.getCoolDemoData();
  }
}