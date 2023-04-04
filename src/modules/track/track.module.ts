// Libs
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// Controllers
import { TrackController } from './track.controller';
// Services
import { TrackService } from './track.service';
import { FileService } from '../file/file.service';
// Schemas
import { Track, TrackSchema } from '../../schemas/track.schema';
import { Comment, CommentSchema } from '../../schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [TrackController],
  providers: [TrackService, FileService],
})
export class TrackModule {}