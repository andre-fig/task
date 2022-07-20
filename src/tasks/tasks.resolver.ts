import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTaskInput } from './dto/create-task.input';
import { DeleteTaskInput } from './dto/delete-task.input';
import { GetTaskInput } from './dto/get-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Resolver()
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Mutation((returns) => Task)
  create(
    @Args('createTaskData') createTaskData: CreateTaskInput,
  ): Promise<Task> {
    return this.tasksService.create(createTaskData);
  }

  @Query((returns) => [Task])
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Query((returns) => Task)
  findOne(@Args('getTaskData') getTaskData: GetTaskInput): Promise<Task> {
    return this.tasksService.findOne(getTaskData);
  }

  @Mutation((returns) => Task)
  update(
    @Args('updateTaskData') updateTaskData: UpdateTaskInput,
  ): Promise<Task> {
    return this.tasksService.update(updateTaskData);
  }

  @Mutation((returns) => Task)
  delete(
    @Args('deleteTaskData') deleteTaskData: DeleteTaskInput,
  ): Promise<Task> {
    return this.tasksService.delete(deleteTaskData);
  }
}
