import React, {useState} from 'react'
import { fetchMovies } from '../../utils/movies-api';

export default function Pagination() {
    const [page, setPage] = useState(1);
    
    const handlePrev = () => {
        setPage(page - 1);
        fetchMovies(page);
    };

    const handleNext = () => {
        setPage(page + 1);
        fetchMovies(page);
    };

    return (
        <div className="flex gap-4 justify-center items-center mt-10">
            <button
            onClick={handlePrev}
            className="bg-[#00786A]  hover:scale-105 transition-all rounded-md text-white py-2 px-4 disabled:bg-gray-400 "
            disabled={page === 1}
            >
                Prev
            </button>
            <button
                onClick={handleNext}
                className="bg-[#00786A] hover:scale-105 transition-all rounded-md text-white py-2 px-4 "
            >
                Next
            </button>
        </div>
    )
}
