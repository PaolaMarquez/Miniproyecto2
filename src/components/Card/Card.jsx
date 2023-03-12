import { Link } from "react-router-dom";

export default function Card({ movie }){
    const imgUrl = "https://image.tmdb.org/t/p/original"
    return(
        <div className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
                src={`${imgUrl}${movie.poster_path}`}
                alt={movie.title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            </div>
            <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                <Link to={movie.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    <p className="text-lg">{movie.title}</p>
                </Link>
                </h3>
                <p className="text-sm font-medium text-gray-900">Popularidad: {movie.popularity}</p>
                <p className="text-sm text-gray-500">Idioma: {movie.original_language}</p>
            </div>
            </div>
        </div>
    )
}