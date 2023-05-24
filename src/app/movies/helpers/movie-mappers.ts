import { IMovieList, IMovieListExternal, IMovie, IMovieDetails, IMovieDetailsExternal, IRating } from "../models/movies.models";

export const mapMovieList = (res: IMovieListExternal): IMovieList => {
    if(res.Response !== 'False') {
        return {
        response: true,
        search: res.Search.map( movie => {
            return {
            poster: movie.Poster,
            title: movie.Title,
            type: movie.Type,
            year: movie.Year,
            imdbId: movie.imdbID,
            } as IMovie;
        }),
        totalResults: res.totalResults
        } as IMovieList;
    }
    return {
        response: false,
        search: [] as IMovie[],
        error: res.Error
    } as IMovieList;
}

export const mapMovieDetails = (res: IMovieDetailsExternal): IMovieDetails => {
    return {
        title: res.Title,
        year: res.Year,
        rated: res.Rated,
        released: res.Released,
        runtime: res.Runtime,
        genre: res.Genre,
        director: res.Director,
        writer: res.Writer,
        actors: res.Actors,
        plot: res.Plot,
        language: res.Language,
        country: res.Country,
        awards: res.Awards,
        poster: res.Poster,
        ratings: res.Ratings.map( (ranting) => {
        return {
            source: ranting.Source,
            value: ranting.Value
        } as IRating
        }),
        metascore: res.Metascore,
        imdbRating: res.imdbRating,
        imdbVotes: res.imdbVotes,
        imdbID: res.imdbID,
        type: res.Type,
        dvd: res.DVD,
        boxOffice: res.BoxOffice,
        production: res.Production,
        website: res.Website,
    } as IMovieDetails;
}