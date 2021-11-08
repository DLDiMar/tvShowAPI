import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { TvShow } from '../entities/tv_show.entity';
import { CreateTvShowDto } from '../dto/create-tv_show.dto';

describe('TvShowsService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service.findAll()).toBeDefined();
  });
  it('should be equal to', () => {
    expect(TvShow).toBe(TvShow);
  });
});
