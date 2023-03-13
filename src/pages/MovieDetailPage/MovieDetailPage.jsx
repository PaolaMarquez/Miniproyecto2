import React from "react";
import { useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import { HomePageUrl, MovieDetailPageUrl } from "../../constants/urls";
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
    <div className=" p-10 bg-opacity-50 md:w-screen md:h-screen" style={{
      background: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition:"center",
      }}>
      <div class="h-full w-full  flex items-center justify-center bg-gray-600 bg-opacity-60">
        <div className="block mx-auto mt-10 max-w-2xl sm:px-0.5 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`${title} Poster`}
              className="w-auto h-auto object-fill object-top mt-0  md:w-auto md:h-auto"
              />
          <div class="block md:block lg:block justify-start ">
            <div className="mt-0 pl-5 lg:row-span-3 lg:mt-0">
              <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-5xl">{title}</h1>
            </div>
            <div className="pl-2 block md:flex flex-col md:flex-row justify-start md:justify-between items-center mt-6 lg:flex-row lg:justify-start lg:row-span-3 lg:mt-4">
               <span className="inline-block flex-row md:inline-flex text-sm md:text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0 uppercase">{release_date}</span>
               <span className="relative inline-block mx-5">
                 <div className="relative top-1 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-gray-100"></div>
               </span>    
               <span className="inline-block flex-row md:inline-flex text-sm md:text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0 uppercase">{genres.map((genre) => genre.name).join(', ')}</span>         
               <span className="relative inline-block mx-5">
                 <div className="relative top-1 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-gray-100"></div>
               </span> 
               <span className="inline-block flex-row md:inline-flex text-sm md:text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0 uppercase">{original_language}</span>  
               <span className="relative inline-block mx-5">
                 <div className="relative top-1 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-gray-100"></div>
               </span> 
               <span className="inline-block flex-row md:inline-flex text-sm md:text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0 uppercase">{runtime} min</span> 
            </div> 
            <div className="flex md:flex flex-row md:flex-row justify-start md:justify-between items-center mt-6 lg:flex-row lg:justify-start lg:row-span-3 lg:mt-4">
              <div className="block mt-0 md:mt-7">
                  <h2 className="ml-4 text-md md:text-lg font-medium text-gray-100 mb-5">Rating</h2>
                  <p className="ml-4 text-sm md:text-lg font-medium text-gray-100">{popularity}</p>  
              </div>  
              <div className="block mt-0 md:mt-7 ml-6 md:ml-16">
                    <h2 className="text-md md:text-lg font-medium text-gray-100 mb-5">Status</h2>
                    <div className="flex">
                         <p className="text-sm md:text-lg font-medium text-gray-100">{status}</p>
                         <span className="relative inline-block mx-5">
                           <div className={status === "Released" ? ('relative top-2 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-green-500'):('relative top-3 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-gray-500')}></div>
                         </span>
                       </div> 
              </div> 
              <div className="block mt-0 md:mt-7 ml-4 md:ml-10">
                <h2 className=" text-md md:text-lg  font-medium text-gray-100 mb-5">Budget</h2>
                <p className="text-sm md:text-lg font-medium text-gray-100">{budget}</p>
              </div>
            </div>
            <div className="relative mt-0 md:mt-5 py-4 pl-6 italic">
              <h2 className=" text-md md:text-lg font-medium text-gray-100">Productions Company</h2>
              <p className="text-sm md:text-md font-medium text-gray-100">
                {production_companies.map((company) => company.name).join(', ')}
              </p>
            </div > 
            <div className=" md:bg-transparent lg:bg-transparent  mt-0 md:mr-10  pl-6 italic">
              <h2 className="text-sm md:text-lg font-medium text-gray-100">Overview</h2>
              <p className='text-sm md:text-md whitespace-normal text-gray-100'>{overview}</p>
            </div>
            <div className="flex justify-center items-center mt-4 mb-3 md:justify-center">
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-1 rounded">
                <Link to={HomePageUrl}>Go Back</Link>
              </button> 
              </div>          
         
        </div>
        </div>
      </div>
    </div>

  )
}


