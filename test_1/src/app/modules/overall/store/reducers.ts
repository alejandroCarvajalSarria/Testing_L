
import { createReducer, on } from '@ngrx/store'
import { DataState } from "../types/data-state.interface"
import * as DataActions from './actions'

export const initialState: DataState = {
    isLoading: false,
    data: [],
    error: null    
}

export const reducers = createReducer(
    initialState,
    on(DataActions.GetData, (state) => ({
        ...state,
        isLoading: true
    })),
    on(DataActions.GetDataSuccess, (state, action:any) => ({
        ...state,
        isLoading: false,
        data: action
    })),

    on(DataActions.GetDataFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error

    }))


)