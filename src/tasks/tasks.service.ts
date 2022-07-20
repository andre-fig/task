import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { DeleteTaskInput } from './dto/delete-task.input';
import { GetTaskInput } from './dto/get-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
  ) {}

  create(createTaskData: CreateTaskInput): Promise<Task> {
    const newTask = this.tasksRepository.create(createTaskData);
    return this.tasksRepository.save(newTask);
  }

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(getTaskData: GetTaskInput): Promise<Task> {
    return this.tasksRepository.findOneOrFail(getTaskData.id);
  }

  async update(updateTaskData: UpdateTaskInput): Promise<Task> {
    const task = await this.findOne(updateTaskData);
    Object.assign(task, updateTaskData);
    return this.tasksRepository.save(task);
  }

  async delete(deleteTaskData: DeleteTaskInput): Promise<Task> {
    const task = await this.findOne(deleteTaskData);
    return this.tasksRepository.remove(task);
  }
}
