import { TasksStatus } from '../task.model.interface';
export class GetTaskFilterDto{
    status: TasksStatus;
    search: string;
}