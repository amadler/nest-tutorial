import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { TasksController } from './tasks/tasks.controller';

@Module({
  imports: [TaskModule],

})
export class AppModule {}
