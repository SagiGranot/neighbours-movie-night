import { createStore, action, thunk, Action, Thunk } from 'easy-peasy';
import { getMovies } from '../services/movies-service';

export interface MoviesFilters {
    page: number;
    Title?: string
}

export interface MoviesModel {
    data: any[];
    filters: MoviesFilters;
    total: number;
    error: any;    
    isLoading: boolean;
    setData: Action<MoviesModel, any>;
    setFilters: Action<MoviesModel, MoviesFilters>;
    setError: Action<MoviesModel, any>;
    setIsLoading: Action<MoviesModel>;
    fetch: Thunk<MoviesModel, MoviesFilters>;
}

export interface MoviesStoreModel {
    movies: MoviesModel;
}

export const moviesStore = createStore<MoviesStoreModel>({
    movies: {
        data: [],
        filters: { page: 0 },
        total: 0,
        isLoading: false,
        error: '',
        setData: action((state, payload) => {
            state.data = payload.data;
            state.total = payload.total;
        }),
        setFilters: action((state, payload) => {
            state.filters = {
                ...payload,
            }
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
                actions.setData(res.data);
            } catch (e) {
                actions.setError(e)
            }
            actions.setIsLoading();
        }),
    },
});