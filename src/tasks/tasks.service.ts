import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { GetTaskFilterDto } from './dto/getTaskFilter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) {}

    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // getTasksWithFilters( filterDto: GetTaskFilterDto): Task[] {
    //     const {status, search} = filterDto;
    //     const tasks = this.getAllTasks();

    //     if (status) {
    //         tasks.filter( v => v.satus === status) ;
    //     }

    //     if (search) {
    //         return tasks.filter( v =>
    //             v.title.includes(search) ||
    //             v.description.includes(search),
    //         );
    //     }
    // }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);
        if ( !found ) {
            throw new NotFoundException(`Task with id: ${id} was not found`);
        }
        return found;
    }
    // createTask( createTaskDto: CreateTaskDto): Task {
    //     const {title, description} = createTaskDto;
    //     const task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         satus: TasksStatus.OPEN,
    //     };
    //     this.tasks.push(task);
    //     return task;
    // }

    // deleteTask( id: string ): void {
    //     const found = this.getTaskById(id);
    //     this.tasks.filter( v => v.id !== found.id);
    // }

    // updateTaskStatus( id: string, status: TasksStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.satus = status;
    //     return task;
    // }
}
