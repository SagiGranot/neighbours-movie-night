import axios from 'axios';

const baseURL = 'https://jsonmock.hackerrank.com/api/movies/search/';

export const getMovies = async (params) => {
    return await axios.get(baseURL, {
            params: {
                ...params,
            }
        }
    );
}