import axios from "axios";

export async function fetchMovies(page){
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d15fc92d781f4254f0b4b3d0f4a1e30b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`);
}

export async function fetchUpcomingMovies(page){
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=d15fc92d781f4254f0b4b3d0f4a1e30b&page=${page}`);
}