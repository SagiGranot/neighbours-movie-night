import { createStore, action, thunk, Action, Thunk } from 'easy-peasy';
import { getMovies } from '../services/movies-service';

// export interface MoviesStoreModel {
//     movies: any;
//     isLoading: boolean;
//     error: any;    
//     setMovies: Action<MoviesStoreModel, any>;
//     setIsLoading: Action<MoviesStoreModel>;
//     setError: Action<MoviesStoreModel, any>;
//     fetch: Thunk<MoviesStoreModel, any>;
// }

const moviesStore = createStore({
    movies: {
        data: [],
        page: 1,
        totalPages: 1,
        error: '',
        setData: action((state, payload) => {
            state.data = payload.data;
            state.totalPages = payload.total_pages;
        }),
        setError: action((state, payload) => {
            state.error = payload;
        }),
        fetch: thunk(async (actions, payload) => {
            try {
                const res = await getMovies(payload);
                actions.setData(res.data);
            } catch (e) {
                actions.setError(e)
            }
        }),
    },
    isLoading: false,
    setPage: action((state, payload) => {
        state.page = payload;
    }),
    setTotalPages: action((state, payload) => {
        state.totalPages = payload;
    }),
    setIsLoading: action((state) => {
        state.isLoading = !state.isLoading;
    }),
});

export default moviesStore;