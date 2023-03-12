import { useCallback, useState } from "react";
import { fetchMoviesById, fetchMovies } from "../utils/movies-api";

export function useMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchMovies();
      setMovies(data.results);
      setIsLoading(false);

      return movies;
    } catch (error) {
      console.error("FAILED GET MOVIES", error);
    }
  }, []);

  const getMovie = useCallback(async (movieId) => {
    try {
      setIsLoading(true);
      const { data } = await fetchMoviesById(movieId);
      setMovie(data);
      setIsLoading(false);

      return movie;
    } catch (error) {
      console.error("FAILED GET MOVIE", error);
    }
  }, []);

  return {
    isLoading,
    movies,
    movie,
    getMovies,
    getMovie,
  };
}