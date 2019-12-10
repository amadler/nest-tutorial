import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from '../tasks/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '<password>',
    database: 'taskmanagement',
    entities: [__dirname + '/**/*.entity.ts', Task],
    synchronize: true,
};
