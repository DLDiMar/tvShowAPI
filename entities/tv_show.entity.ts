import { ApiProperty } from '@nestjs/swagger';

export class TvShow {
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
