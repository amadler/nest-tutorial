import { Injectable, NotFoundException } from '@nestjs/common';
import * as uuid from 'uuid';
import { Task, TasksStatus } from './task.model.interface';
import { CreateTaskDto } from './dto/createTask.dto';
import { GetTaskFilterDto } from './dto/getTaskFilter.dto';
@Injectable()
export class TasksService {
    tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTasksWithFilters( filterDto: GetTaskFilterDto): Task[] {
        const {status, search} = filterDto;
        const tasks = this.getAllTasks();

        if (status) {
            tasks.filter( v => v.satus === status) ;
        }

        if (search) {
            return tasks.filter( v =>
                v.title.includes(search) ||
                v.description.includes(search),
            );
        }
    }

    getTaskById(id: string): Task {
        const found = this.tasks.find( v => v.id === id);

        if ( !found ) {
            throw new NotFoundException(`Task with id: ${id} was not found`);
        }

        return found;
    }

    createTask( createTaskDto: CreateTaskDto): Task {
        const {title, description} = createTaskDto;
        const task = {
            id: uuid(),
            title,
            description,
            satus: TasksStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }

    deleteTask( id: string ): void {
        this.tasks.filter( v => v.id !== id);
    }

    updateTaskStatus( id: string, status: TasksStatus): Task {
        const task = this.getTaskById(id);
        task.satus = status;
        return task;
    }
}
