import React from 'react';

import { MovieCard } from './MovieCard';
import {GenreResponseProps, MovieProps} from '../App'
import { Header } from './Header';

interface ContentProps {
  selectedGenre: GenreResponseProps,
  movies: MovieProps[]
}

export function Content(props: ContentProps) {
  const { selectedGenre, movies } = props;
  
  return (
    <div className="container">
      <Header title={selectedGenre.title} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}