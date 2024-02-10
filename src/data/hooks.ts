import { createTypedHooks } from 'easy-peasy';
import { MoviesStoreModel } from './stores/movies-store';

const typedHooks = createTypedHooks<MoviesStoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;