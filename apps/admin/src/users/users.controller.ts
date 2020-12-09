import { User } from './../../../../libs/db/src/models/user.models';
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: User,
})
// crud查询同时支持分页等查询操作,具体见nestjs-mongoose-crud
//  /users?query={"where":{"username":"user1","age":{"$gt":18}},"sort":"-_id","limit":10,"page":2,"populate":"friends"}
// ?query={"page":1,limit:10,}
// ?query={"sort":{"key":1/-1}} key:按key排序
// ?query={"where":{"username":"javier"}}返回username=javier那组数据
// ?query={"where":{"username":{"$regex":"a"}}}返回username中有a的数据
@Controller('users')
@ApiTags('用户') //在swagger api文档中设定分组标签
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}
}
