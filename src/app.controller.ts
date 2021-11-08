import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TvShow } from '../entities/tv_show.entity';
import { ApiTags, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { CreateTvShowDto } from '../dto/create-tv_show.dto';
import { UpdateTvShowDto } from '../dto/update-tv_show.dto';

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
  @ApiOkResponse({ type: TvShow, isArray: true })
  @Patch('/change/:id')
  updateTvShow(@Param('id') id: number, updateTvShowDto: UpdateTvShowDto) {
    return this.appService.updateTvShow(Number(id), updateTvShowDto);
  }
}
