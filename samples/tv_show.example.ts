import { TvShow } from 'entities/tv_show.entity';

export class TvShows {
  private tv_shows: TvShow[] = [
    {
      id: 1,
      series_name: 'Hey_Arnold',
      air_date: 'July_10_1996',
      number_seasons: 5,
      number_episodes: 100,
    },
    {
      id: 2,
      series_name: 'Rocket_Power',
      air_date: 'August_16_1999',
      number_seasons: 4,
      number_episodes: 64,
    },
    {
      id: 3,
      series_name: 'Cobra_Kai',
      air_date: 'May_2_2018',
      number_seasons: 3,
      number_episodes: 30,
    },
    {
      id: 4,
      series_name: 'Big_Hero_6_The_Animated_Series',
      air_date: 'November_20_2017',
      number_seasons: 3,
      number_episodes: 56,
    },
  ];
}
