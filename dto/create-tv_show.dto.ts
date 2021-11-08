import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class CreateTvShowDto {
  @Field()
  @IsNotEmpty()
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
