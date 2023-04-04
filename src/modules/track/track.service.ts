// Libs
import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// Services
import { FileService } from '../file/file.service';
// Schemas
import { Track, TrackDocument } from '../../schemas/track.schema';
import { Comment, CommentDocument } from '../../schemas/comment.schema';
// DTO
import { CreateTrackDto } from '../../common/dto/create-track.dto';
import { CreateCommentDto } from '../../common/dto/create-comment.dto';

// Enums
import { FileTypeEnum } from '../../common/enums/file-type.enum';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService,
  ) {}
  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileTypeEnum.AUDIO, audio);
    const picturePath = this.fileService.createFile(
      FileTypeEnum.IMAGE,
      picture,
    );
    const track = await this.trackModel.create({
      ...dto,
      listens: 0,
      audio: audioPath,
      picture: picturePath,
    });
    return track;
  }
  async getAll(count = 10, offset = 0): Promise<Track[]> {
    const tracks = await this.trackModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));
    return tracks;
  }
  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id);
    return track;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return track._id;
  }
  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.trackModel.create({ ...dto });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    track.comments.push(comment._id);
    await track.save();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return comment;
  }
  async listen(id: ObjectId) {
    const track = await this.trackModel.findById(id);
    track.listens += 1;
    await track.save();
  }

  search(query: string): Promise<Track[]> {
    const tracks = this.trackModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });
    return tracks;
  }
}
