import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { GetTaskFilterDto } from './dto/getTaskFilter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(
        private tasksService: TasksService,
    ) { }

    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: GetTaskFilterDto): Task[] {
    //     if ( Object.keys(filterDto).length ) {
    //         return this.tasksService.getTasksWithFilters(filterDto);
    //     }
    //     return this.tasksService.getAllTasks();
    // }
    // @Get(':id')
    // getTaskById(@Param('id') id): Task {
    //     return this.tasksService.getTaskById(id);
    // }
    @Get(':id')
    getTaskById(@Param('id', ParseIntPipe) id ): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }
    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto: CreateTaskDto): Task {
    //     return this.tasksService.createTask(createTaskDto);
    // }

    // @Patch(':id/status')
    // updateTaskStatus(@Param('id') id, @Body('status', TaskStatusValidationPipe) status: TasksStatus): Task {
    //     return this.tasksService.updateTaskStatus(id, status);
    // }

    // @Delete(':id')
    // deleteTask(@Param('id') id): void {
    //     return this.tasksService.deleteTask(id);
    // }

}
