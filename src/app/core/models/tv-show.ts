import { Image } from './image';
import { Schedule } from './schedule';

export interface TvShow {
    id: number;
    name: string;
    summary: string;
    officialSite?: string;
    type: string;
    language: string;
    status: string;
    image: Image;
    rating: any;
    premiered: string|Date;
    ended?: string|Date;
    schedule: Schedule;
}