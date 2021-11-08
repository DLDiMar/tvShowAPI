import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
@ArgsType()
export class TvShow {
  @Field()
  @ApiProperty()
  id: number;
  @ApiProperty()
  series_name: string;
  @ApiProperty()
  air_date: string;
  @ApiProperty()
  number_seasons: number;
  @ApiProperty()
  number_episodes: number;
}
