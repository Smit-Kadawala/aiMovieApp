import { rootReducer } from '../Reducer/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

export const Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
});