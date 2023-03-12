import React from "react";
import { useState } from 'react'
import creed3 from "../../assets/creedIII.png"
import ProgressBar from "./ProgressBar";
import bgcreed from "../../assets/bg.png"

const details = {
  name: 'Creed III (2023)',
  date: '03/03/2023 (US) ',
  moviegen: ' DRAMA ',
  duration: ' 1h 56m',
  language: 'ENG',
  rating: '70',
  quote: "You can't run from your past",
  overview: 'After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damien Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damien - a fighter who has nothing to lose.',
  status: 'Release',
  budget: '-',
  revenue: '$100.000.000',
  company: '',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Start', href: '#' },
    { id: 2, name: 'Movies', href: '#' },
  ],
  images: [
    {
      src: creed3,
      alt: 'Creed III billboard image.',
    },
  ],
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function MovieDetailPage() {
  return (
    <div className="flex flex-col bg-white w-full h-full">
      <div className="flex flex-col">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {details.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={details.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {details.name}
              </a>
            </li>
          </ol>
        </nav>
        <img src={bgcreed} alt="Imagen de fondo" class="absolute inset-15 w-full h-full object-cover md:inset-auto  "/>
        <div class="absolute inset-auto bg-gray-600 opacity-80 w-full h-full sm: "></div>
        <div class="absolute inset-14 flex items-center justify-center ">
          {/* Image gallery e informacion de importancia */}
          <div className="flex mx-auto mt-6 max-w-2xl sm:px-0.5    lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img
              src={details.images[0].src}
              alt={details.images[0].alt}
              className="w-1/2 h-1/2 object-fill object-center  md:w-auto md:h-auto"
            />
              <div class="block justify-start">
                {/* Titulo*/}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-5xl">{details.name}</h1>
                </div>
                {/* Div tiene la informacion de fecha de lanzamiento, genero, duracion, idioma original de la pelicula */}
                <div className="flex flex-col md:flex-row justify-start md:justify-between items-center mt-6 lg:flex-row lg:justify-start lg:row-span-3 lg:mt-4">
                  <span className="text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0">{details.date}</span>
                  <span className="relative inline-block mx-5">
                    <div className="relative top-3 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-gray-100"></div>
                  </span>    
                  <span className="text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0">{details.moviegen}</span>         
                  <span className="relative inline-block mx-5">
                    <div className="relative top-3 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-gray-100"></div>
                  </span> 
                  <span className="text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0">{details.duration}</span>
                  <span className="relative inline-block mx-5">
                    <div className="relative top-3 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-gray-100"></div>
                  </span>
                  <span className="text-xl tracking-tight text-gray-100 whitespace-nowrap mb-2 sm:mb-0">{details.language}</span>  
                </div>
                {/* Con este componente se logro la creacion de la barra de progreso #Ayuda de youtube */}
                <div className="flex">
                  <div className="block mt-7">
                    <h2 className="text-lg font-medium text-gray-100 mb-5">Rating</h2>
                    <ProgressBar percentage={details.rating}/>    
                  </div> 
                  {/* Status*/}
                  <div className="block mt-7 ml-16">
                    <h2 className="text-lg font-medium text-gray-100 mb-5">Status</h2>
                    <div className="flex">
                      <p className="text-lg font-medium text-gray-100">{details.status}</p>
                      <span className="relative inline-block mx-5">
                        <div className="relative top-3 left-0.5 transform -translate-x-0.5 -translate-y-0.5 w-3 h-3 rounded-full bg-green-500"></div>
                      </span>
                    </div> 
                  </div>    
                  {/* Budget  TODO: revisar bien el css para que los valores no choquen*/}                   
                  <div className="block mt-7 ml-10">
                    <h2 className="text-lg font-medium text-gray-100 mb-5">Budget</h2>
                    <p className="text-lg font-medium text-gray-100">{details.budget}</p>
                  </div> 
                  {/* Revenue*/}
                  <div className="block mt-7 ml-20">
                    <h2 className="text-lg font-medium text-gray-100 mb-5">Revenue</h2>
                    <p className="text-lg font-medium text-gray-100">{details.revenue}</p>
                  </div> 
                </div>   
                {/* Quote de la pelicula*/}
                <div className="relative mt-5 py-4 pl-6 italic">
                  <p className="text-lg font-medium text-gray-100">
                    "You can't run from your past."
                  </p>
                </div >
                <div className="relative mt-5 py-4 pl-6 italic">
                <h2 className="text-lg font-medium text-gray-100">Productions Company</h2>
                  <p className="text-lg font-medium text-gray-100">
                    "Info del company"
                  </p>
                </div >
                {/* Overview de la pelicula*/}
                <div className="absolute mt-0 mr-0 py-4 pl-6 italic">
                    <h2 className="text-lg font-medium text-gray-100">Overview</h2>
                    <p className='whitespace-normal text-gray-100'>{details.overview}</p>
                </div>
              </div>       
          </div>
        </div>
      </div>
    </div>
  )
}


