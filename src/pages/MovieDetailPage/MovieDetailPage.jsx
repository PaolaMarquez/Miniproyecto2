import { Fragment, useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
// import { fetchMoviesDetail } from "../../utils/movies-api";
import { useParams } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function MovieDetailPage() {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  // const { movieId } = useParams();
  // const [movie, setMovies] = useState([]);
  // const getMovies = async () => {
  //   const { data } = await fetchMoviesDetail(movieId);
  //   setMovies(data);
  // };

  // useEffect(() => {
  //   getMovies(movieId);
  // }, [getMovies]);

  const { movieId } = useParams();
  const { getMovie, movie, isLoading } = useMovies();
  const {
    title,
    poster_path,
    genres,
    original_language,
    budget,
    overview,
    popularity,
    production_companies,
    release_date,
    status,
    backdrop_path,
    runtime,
  } = movie || {};
  useEffect(() => {
    if (!isLoading && movieId) {
      getMovie(movieId);
    }
  }, [getMovie]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!isLoading && !movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
      <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
        <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
          <img
            src={`${imgUrl}${movie.poster_path}`}
            // alt={movie.title}
            alt={title}
            className="object-cover object-center"
          />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-5xl font-bold text-gray-900 sm:pr-12">
            {title}
            {/* {movie.title} */}
          </h2>

          <section aria-labelledby="information-heading" className="mt-2">
            <p className="text-lg text-gray-900">
              Lenguaje Original: {movie.original_language}
            </p>
            <div className="mt-6">
              <h4 className="sr-only">Reviews</h4>
              <div className="flex items-center">
                <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {movie.popularity} en popularidad
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="options-heading" className="mt-10">
            <div>
              <div>
                <h4 className="text-xl font-medium text-gray-900">
                  Descripción
                </h4>
                <p className="mt-5 text-justify">{movie.overview}</p>
              </div>
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">Size</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
