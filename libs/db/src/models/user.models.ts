import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用户名' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码' }) //用于swagger生成的api文档
  @prop()
  password: number;
}
