import axios from "axios";

// export async function fetchMovies(){
//     return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d15fc92d781f4254f0b4b3d0f4a1e30b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
// }

export async function fetchMoviesSearch(search){
    const url1 = `https://api.themoviedb.org/3/search/movie?api_key=d15fc92d781f4254f0b4b3d0f4a1e30b&query=`;
    return axios.get(`${url1}${search}`);
}
export async function fetchMovies(page){
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d15fc92d781f4254f0b4b3d0f4a1e30b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`);
}
export async function fetchMoviesDetail(movieId){
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d15fc92d781f4254f0b4b3d0f4a1e30b`);

}