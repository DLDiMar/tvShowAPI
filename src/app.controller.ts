import {
  Controller,
  Get,
  Param,
  Put,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TvShow } from '../entities/tv_show.entity';
import { ApiTags, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { CreateTvShowDto } from '../dto/create-tv_show.dto';

@ApiTags('TvShows')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({ type: TvShow, isArray: true })
  @Get('')
  findAll(): TvShow[] {
    return this.appService.findAll();
  }

  @ApiOkResponse({ type: TvShow, isArray: true })
  @Get(':id')
  findOneShow(@Param('id') id: string): TvShow {
    if (id === '') {
      throw new BadRequestException();
    }
    return this.appService.findOneShow(Number(id));
  }

  @ApiResponse({ status: 201, description: 'Record was created' })
  @Post()
  async createTvShow(@Body() createTvShowDto: CreateTvShowDto) {
    if (
      !createTvShowDto.id ||
      !createTvShowDto.series_name ||
      !createTvShowDto.number_episodes ||
      !createTvShowDto.number_seasons
    ) {
      throw new BadRequestException();
    }
    return this.appService.createTvShow(createTvShowDto);
  }
  // Below (commented out) is trial update tv show by id
  /*
  @ApiOkResponse({ type: TvShow, isArray: true })
  @Put('/change/:id')
  updateTvShow(
    @Param('id') id: number,
    @Param('series_name') series_name: string,
    @Param('air_date') air_date: string,
    @Param('number_seasons') number_seasons: number,
    @Param('number_episodes') number_episodes: number,
  ): TvShow {
    if (!id || !series_name || !number_episodes || !number_seasons) {
      throw new BadRequestException();
    }
    return this.appService.updateTvShow(
      id,
      series_name,
      air_date,
      number_seasons,
      number_episodes,
    );
  }
  */

  //Placeholder Put controller (see above for actual)
  @ApiOkResponse({ type: TvShow, isArray: true })
  @Put('/change/:id')
  updateTvShow() {
    return this.appService.updateTvShow();
  }
}
