import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { fetchMovies, fetchUpcomingMovies } from "../../utils/movies-api";

export function HomePage() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [option, setOption] = useState(0);
    
    const handlePrev = () => {
        setPage(page - 1);
        if (option === 0){
            getMovies(page);
        } else {
            getUpcomingMovies(page);
        }
    };

    const handleNext = () => {
        setPage(page + 1);
        if (option === 0){
            getMovies(page);
        } else {
            getUpcomingMovies(page);
        }
    };

    const getMovies = async (page) => {
        const {data} = await fetchMovies(page);
        setMovies(data.results);
    };

    const getUpcomingMovies = async (page) => {
        const {data} = await fetchUpcomingMovies(page);
        setMovies(data.results);
    };

    const handleCommonMovies = () => {
        if (option === 1){
            setPage(1);
            getMovies(page);
            setOption(0);
        }
    };
    const handleUpcomingMovies = () => {
        if (option === 0){
            setPage(1);
            getUpcomingMovies(page);
            setOption(1);
        }
    };

    useEffect(() => {
        if (option === 0){
            getMovies(page);
        } else {
            getUpcomingMovies(page);
        }
    }, [page, option]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:justify-between items-center">
                    
                    {/* Options */}
                    {option === 0 ? (
                        <div className="flex border">
                            <div className="bg-gray-200 p-2">Películas comunes</div>
                            <div onClick={handleUpcomingMovies} className="p-2 hover:cursor-pointer">Próximas películas</div>
                        </div>
                    ) : (
                        <div className="flex border">
                            <div onClick={handleCommonMovies} className="p-2 hover:cursor-pointer">Películas comunes</div>
                            <div className="bg-gray-200 p-2">Próximas películas</div>
                        </div>
                    )}

                    {/* Pages */}
                    <div className="flex gap-4 justify-center items-center">
                        <ul className="inline-flex -space-x-px items-center">
                            <li>
                            <button disabled={page === 1} onClick={handlePrev} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:bg-gray-100">Anterior</button>
                            </li>
                            {page >= 2 ? (
                                <li>
                                    <div className="cursor-default px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300">{page - 1}</div>
                                </li>
                            ) : null}
                            <li>
                                <div className="cursor-default px-3 py-2 leading-tight text-blue-600 border border-gray-300 bg-blue-50">{page}</div>
                            </li>
                            <li>
                                <div className="cursor-default px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300">{page + 1}</div>
                            </li>
                            <li>
                                <button onClick={handleNext} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Siguiente</button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Movies */}
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {movies.map((movie) => (
                    <Card movie={movie} key={movie.id} />
                ))}
                </div>
            </div>
        </div>
    );
}
