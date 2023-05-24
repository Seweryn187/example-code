export interface IMovieListExternal {
  Response: string;
  Search: IMovieExternal[];
  totalResults: number;
  Error?: string;
}

export interface IMovieExternal {
  Poster: string;
  Title: string;
  Type: string
  Year: number;
  imdbID: string;
}

export interface IMovieList {
  response: boolean;
  search: IMovie[];
  totalResults: number;
  error?: string;
}

export interface IMovie {
  poster: string;
  title: string;
  type: string
  year: number;
  imdbId: string;
}

export interface IMovieDetailsExternal {
  Title: string;
  Year: number;
  Rated: string;
  Released: Date;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRatingExternal[];
  Metascore: number;
  imdbRating: number;
  imdbVotes: number;
  imdbID: string;
  Type: string;
  DVD: Date;
  BoxOffice: string;
  Production: string;
  Website: string;
}

export interface IRatingExternal {
  Source: string;
  Value: string;
}

export interface IMovieDetails {
    title: string;
    year: number;
    rated: string;
    released: Date;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    ratings: IRating[];
    metascore: number;
    imdbRating: number;
    imdbVotes: number;
    imdbID: string;
    type: string;
    dvd: Date;
    boxOffice: string;
    production: string;
    website: string;
  }
  
  export interface IRating {
    source: string;
    value: string;
  }

  export enum MovieTypes {
    MOVIE = 'movie',
    SERIES = 'series',
    EPISODE = 'episode'
  }