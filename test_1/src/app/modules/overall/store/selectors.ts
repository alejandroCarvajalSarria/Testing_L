import { AppStateInterface } from "src/app/types/app-state.interface";
import { createSelector } from "@ngrx/store"

export const selectFeature = (state: AppStateInterface) => state.data;

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
)


export const dataSelector = createSelector(
    selectFeature,
    (state) => state.data
)


export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
)



