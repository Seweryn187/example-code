import { IMovie } from "../models/movies.models";

export const trackByImdbId = (index: number, movie: IMovie): string => {
    return movie.imdbID;
}