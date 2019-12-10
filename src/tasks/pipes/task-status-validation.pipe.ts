import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TasksStatus } from '../enums/tasks-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TasksStatus.OPEN,
        TasksStatus.IN_PROGRESS,
        TasksStatus.DONE,
    ];

    private isValidStatus(status) {
        const idx = this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
    transform( value: string) {
        value = value.toUpperCase();
        if (!this.isValidStatus(value)) {
            throw new BadRequestException(`${value} is not correct status!`);
        }
        return value;
    }
}
