import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { fetchMovies } from "../../utils/movies-api";

export function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    setPage(page - 1);
    getMovies(page);
  };

  const handleNext = () => {
    setPage(page + 1);
    getMovies(page);
  };

  const getMovies = async (page) => {
    const { data } = await fetchMovies(page);
    setMovies(data.results);
  };
  useEffect(() => {
    getMovies(page);
  }, [page]);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Películas
          </h2>
          <div className="flex gap-4 justify-center items-center">
            <ul className="inline-flex -space-x-px items-center">
              <li>
                <button
                  disabled={page === 1}
                  onClick={handlePrev}
                  className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:bg-gray-100"
                >
                  Anterior
                </button>
              </li>
              {page >= 2 ? (
                <li>
                  <div className="cursor-default px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300">
                    {page - 1}
                  </div>
                </li>
              ) : null}
              <li>
                <div className="cursor-default px-3 py-2 leading-tight text-blue-600 border border-gray-300 bg-blue-50">
                  {page}
                </div>
              </li>
              <li>
                <div className="cursor-default px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300">
                  {page + 1}
                </div>
              </li>
              <li>
                <button
                  onClick={handleNext}
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {movies.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
