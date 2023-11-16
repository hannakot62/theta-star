import { configureStore } from '@reduxjs/toolkit'
import isSettingStartReducer from "./slices/isSettingStartSlice";
import isSettingEndReducer from "./slices/isSettingEndSlice";
import isSettingBoundariesReducer from "./slices/isSettingBoundariesSlice";
import isLoadingReducer from  './slices/isLoadingSlice'
import startPointReducer from './slices/startPointSlice'
import endPointReducer from './slices/endPointSlice'
import isCleanReducer from './slices/isCleanSlice'
import matrixReducer from './slices/matrixSlice'


export const store = configureStore({
    reducer: {
        isSettingStart: isSettingStartReducer,
        isSettingEnd: isSettingEndReducer,
        isSettingBoundaries: isSettingBoundariesReducer,
        isLoading: isLoadingReducer,
        startPoint: startPointReducer,
        endPoint: endPointReducer,
        isClean: isCleanReducer,
        matrix: matrixReducer
    }
})






