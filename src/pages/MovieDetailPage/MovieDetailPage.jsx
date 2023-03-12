import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
export function MovieDetailPage() {
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
        <h1 >Loading...</h1>
      </div>
    );
  }

  if (!isLoading && !movie) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div className="bg-white w-full h-full">
      <div className="pt-10 w-full h-full">
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}alt="Imagen de fondo" class="absolute inset-15  w-full h-full object-cover md:inset-auto  "/>
        <div class="absolute inset-auto bg-gray-600 opacity-80 w-full h-full sm: "></div>
        <div class="absolute inset-14 flex items-center justify-center ">
          {/* Image gallery e informacion de importancia */}
          <div className="flex mx-auto mt-6 max-w-2xl sm:px-0.5    lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`${title} Poster`}
              className="w-1/2 h-1/2 object-fill object-center  md:w-auto md:h-auto"
            />
              <div class="block justify-start">
                {/* Titulo*/}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-5xl">{title}</h1>
                </div>
                {/* Div tiene la informacion de fecha de lanzamiento, genero, duracion, idioma original de la pelicula */}
                <div className="flex flex-col md:flex-row justify-start md:justify-between items-center mt-6 lg:flex-row lg:justify-start lg:row-span-3 lg:mt-4">
                  <span className="text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0 uppercase">{release_date}</span>
                  <span className="relative inline-block mx-5">
                    <div className="relative top-1 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-gray-100"></div>
                  </span>    
                  <span className="text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0 uppercase">{genres.map((genre) => genre.name).join(', ')}</span>         
                  <span className="relative inline-block mx-5">
                    <div className="relative top-1 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-gray-100"></div>
                  </span> 
                  <span className="text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0 uppercase">{original_language}</span>  
                  <span className="relative inline-block mx-5">
                    <div className="relative top-1 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-gray-100"></div>
                  </span> 
                  <span className="text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0 uppercase">{runtime} min</span> 
                </div>
                {/* Con este componente se logro la creacion de la barra de progreso #Ayuda de youtube */}
                <div className="flex">
                  <div className="block mt-7">
                    <h2 className="text-lg font-medium text-gray-100 mb-5">Rating</h2>
                      <p className="text-lg font-medium text-gray-100">{popularity}</p>  
                  </div> 
                  {/* Status*/}
                  <div className="block mt-7 ml-16">
                    <h2 className="text-lg font-medium text-gray-100 mb-5">Status</h2>
                    <div className="flex">
                      <p className="text-lg font-medium text-gray-100">{status}</p>
                      <span className="relative inline-block mx-5">
                        <div className={status === "Released" ? ('relative top-3 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-green-500'):('relative top-3 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-gray-500')}></div>
                      </span>
                    </div> 
                  </div>    
                  {/* Budget  TODO: revisar bien el css para que los valores no choquen*/}                   
                  <div className="block mt-7 ml-10">
                    <h2 className="text-lg font-medium text-gray-100 mb-5">Budget</h2>
                    <p className="text-lg font-medium text-gray-100">{budget}</p>
                  </div> 
                </div>   
                {/* Info de la company de la pelicula*/}
                <div className="relative mt-5 py-4 pl-6 italic">
                <h2 className="text-lg font-medium text-gray-100">Productions Company</h2>
                  <p className="text-lg font-medium text-gray-100">
                    {production_companies.map((company) => company.name).join(', ')}
                  </p>
                </div >
                {/* Overview de la pelicula*/}
                <div className="absolute mt-0 mr-10 py-4 pl-6 italic">
                    <h2 className="text-lg font-medium text-gray-100">Overview</h2>
                    <p className='whitespace-normal text-gray-100'>{overview}</p>
                </div>
              </div>       
          </div>
        </div>
      </div>
    </div>
  )
}


