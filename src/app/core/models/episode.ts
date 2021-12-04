import { Image } from ".";

export interface Episode {
    id: number;
    name: string;
    summary: string;
    runtime: number;
    rating: any;
    image: Image;
}