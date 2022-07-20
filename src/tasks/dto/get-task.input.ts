import { Int, Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class GetTaskInput {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
