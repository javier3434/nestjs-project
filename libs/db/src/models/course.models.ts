import { Episode } from './episode.model';
import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop, Ref } from '@typegoose/typegoose';

@modelOptions({
  //给每组数据加上createdAt和updatedAt
  schemaOptions: {
    timestamps: true,
  },
})
export class Course {
  @ApiProperty({ description: '课程名称' })
  @prop()
  title: string;

  @ApiProperty({ description: '封面图' }) //用于swagger生成的api文档
  @prop()
  cover: string;

  @ApiProperty({ description: '课程名称' })
  @prop({ itemsRef: 'Episode', kind: 'Array ' })
  episodes: Ref<Episode>[];
}
