import { CoursesController } from './courses/courses.controller';
import { UsersController } from './users/users.controller';
import { DbModule } from '../../../libs/db/src/db.module';
import { Module } from '@nestjs/common';
import { AdminController } from './app.controller';
import { AdminService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { CoursesModule } from './courses/courses.module';
import { EpisodesController } from './episodes/episodes.controller';

@Module({
  imports: [DbModule],
  // imports: [DbModule, UsersModule, CoursesModule],//可以在这里引入module,在其module中引入其对应的controller
  controllers: [
    AdminController,
    UsersController,
    CoursesController,
    EpisodesController,
  ], //也可以在这直接引入对应的controller
  providers: [AdminService],
})
export class AdminModule {}
