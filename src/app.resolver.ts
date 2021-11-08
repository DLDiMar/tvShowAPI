import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateTvShowDto } from 'dto/create-tv_show.dto';
import { TvShow } from '../entities/tv_show.entity';
import { AppService } from './app.service';

@Resolver(() => TvShow)
export class TvShowResolver {
  constructor(private tvShowService: AppService) {}

  @Query(() => TvShow, { name: 'id', nullable: false })
  findOneShow(@Args() getTvShowArgs: CreateTvShowDto) {
    return this.tvShowService.findOneShow(Number('id'));
  }

  @Mutation(() => TvShow)
  updateTvShow(
    @Args({ name: 'id', type: () => Number }) TvShow,
  ): CreateTvShowDto {
    return this.tvShowService.createTvShow(new TvShow());
  }
}
