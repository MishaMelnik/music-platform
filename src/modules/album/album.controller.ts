// Libs
import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class AlbumController {
  constructor(private appService) {}
  @Get()
  getUsers() {
    return this.appService.getUsers();
  }
}
