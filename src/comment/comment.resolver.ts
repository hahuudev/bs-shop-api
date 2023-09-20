import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CommentSchema } from './comment.schema';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Response } from 'src/Core/core.entity';

@Resolver('Comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => CommentSchema, { name: 'newComment' })
  create(@Args('createCommentInput') createCommentInput: CreateCommentInput) {
    return this.commentService.create(createCommentInput);
  }

  @Query(() => [CommentSchema], { name: 'comments' })
  findAll() {
    return this.commentService.findAll();
  }

  @Query(() => CommentSchema, { name: 'getCommentById' })
  findOne(@Args('id') id: number) {
    return this.commentService.findOne(id);
  }

  @Mutation(() => Response, { name: 'updateComment' })
  update(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput) {
    return this.commentService.update(updateCommentInput);
  }

  @Mutation(() => Response, { name: 'deleteComment' })
  remove(@Args('id') id: number) {
    return this.commentService.remove(id);
  }
}
