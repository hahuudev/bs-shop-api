import { Injectable } from '@nestjs/common';
import { CommentEntity } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    public readonly commentRepo: Repository<CommentEntity>,
  ) {}

  async create(createCommentInput: CreateCommentInput) {
    const comment = new CommentEntity();
    comment.userId = createCommentInput.userId;
    comment.content = createCommentInput.content;
    comment.productId = createCommentInput.productId;

    return await this.commentRepo.save(comment);
  }

  async findAll(): Promise<CommentEntity[]> {
    const comments = await this.commentRepo.find();
    return comments;
  }

  async findOne(id: number) {
    const comment = await this.commentRepo.findOne({ where: { id: id } });
    return comment;
  }

  async update(comment: UpdateCommentInput) {
    await this.commentRepo.update(comment.id, comment);

    return {
      message: 'Update comment successfully',
      data: comment.id,
    };
  }

  async remove(id: number) {
    await this.commentRepo.delete(id);
    return {
      message: 'Delete comment successfully',
      data: id,
    };
  }
}
