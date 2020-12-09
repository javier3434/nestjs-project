import { Episode } from './models/episode.model';
import { Course } from './models/course.models';
import { User } from './models/user.models';
import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';

const models = TypegooseModule.forFeature([User, Course, Episode]);
@Global() //全局引用,也可以改为按需引用
@Module({
  imports: [
    TypegooseModule.forRoot(
      'mongodb+srv://test:test123456@cluster0.zcstn.mongodb.net/Cluster0?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
    ),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
