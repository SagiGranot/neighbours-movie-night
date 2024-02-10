import axios from 'axios';
import { MoviesFilters } from '../stores/movies-store';

const baseURL = 'https://jsonmock.hackerrank.com/api/movies/search/';

export const getMovies = async (params: MoviesFilters) => {
    return await axios.get(baseURL, {
            params: {
                ...params,
            }
        }
    );
}