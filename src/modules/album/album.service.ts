// Libs
import { Injectable } from '@nestjs/common';
@Injectable()
export class AlbumService {
  getUsers(): string {
    return 'GET ALL USERS';
  }
}
