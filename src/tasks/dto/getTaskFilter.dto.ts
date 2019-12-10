import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { TasksStatus } from '../enums/tasks-status.enum';
export class GetTaskFilterDto {

    @IsOptional()
    @IsIn( Object.values(TasksStatus))
    status: TasksStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}
