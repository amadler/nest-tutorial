import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { TasksStatus } from './enums/tasks-status.enum';

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TasksStatus;
}
