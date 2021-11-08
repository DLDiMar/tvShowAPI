import { PartialType } from '@nestjs/mapped-types';
import { CreateTvShowDto } from './create-tv_show.dto';

export class UpdateTvShowDto extends PartialType(CreateTvShowDto) {}
