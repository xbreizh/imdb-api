import { FilmCategory } from "./film-category.enum";

export interface Film {
    id: number;
    title: string;
    category: FilmCategory;
    created: Date;
    posterUrl: string;
    description: string;
}
