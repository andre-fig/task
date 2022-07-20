import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: true })
  content: string;

  @Field()
  @IsNotEmpty()
  author: string;
}
