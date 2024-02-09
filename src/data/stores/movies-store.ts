import { createStore, computed, action, thunk, Action, Thunk } from 'easy-peasy';
import { getMovies } from '../services/movies-service';

export interface MoviesStoreModel {
    movies: any;
    isLoading: boolean;
    error: any;    
    setMovies: Action<MoviesStoreModel, any>;
    setIsLoading: Action<MoviesStoreModel>;
    setError: Action<MoviesStoreModel, any>;
    fetch: Thunk<MoviesStoreModel, any>;
}

const moviesStore = createStore<MoviesStoreModel>({
    movies: null,
    isLoading: false,
    error: '',
    setMovies: action((state, payload) => {
        state.movies = payload;
    }),
    setIsLoading: action((state) => {
        state.isLoading = !state.isLoading;
    }),
    setError: action((state, payload) => {
        state.error = payload;
    }),
    fetch: thunk(async (actions, payload) => {
        actions.setIsLoading();
        try {
            const res = await getMovies(payload);
            actions.setMovies(res);
        } catch (e) {
            actions.setError(e)
        }
        actions.setIsLoading();
    }),
});

export default moviesStore;