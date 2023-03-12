import React, { useEffect, useState } from 'react'
import Card from "../../components/Card/Card";
import Pagination from '../../components/Pagination/Pagination';
import { fetchMovies } from "../../utils/movies-api";

export function HomePage() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const {data} = await fetchMovies(1);
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-around items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Películas</h2>
            <div><Pagination/></div>
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
