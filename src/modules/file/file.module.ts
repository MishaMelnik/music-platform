// Libs
import { Module } from '@nestjs/common';
// Modules
import { FileService } from './file.service';

@Module({
  providers: [FileService],
})
export class FileModule {}
