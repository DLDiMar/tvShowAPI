import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateTvShowDto } from 'dto/create-tv_show.dto';
import { TvShow } from '../entities/tv_show.entity';
import { AppService } from './app.service';

@Resolver(() => TvShow)
export class TvShowResolver {
  constructor(private tvShowService: AppService) {}

  @Query(() => TvShow)
  findAll(): TvShow[] {
    return this.tvShowService.findAll();
  }

  @Mutation(() => TvShow)
  createTvShow(@Args() createTvShowDto: CreateTvShowDto): TvShow {
    return this.tvShowService.createTvShow(createTvShowDto);
  }
}
