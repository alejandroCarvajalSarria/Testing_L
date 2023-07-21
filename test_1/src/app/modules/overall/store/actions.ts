import { createAction, props } from "@ngrx/store";
import { Data } from "../types/data.interface";

export enum DataActions{
    GET_DATA = '[Data] Get Data Started',
    GET_DATA_SUCCESS = '[Data] Get Data Success',
    GET_DATA_FAILURE = '[Data] Get Data Failure '
}

export const GetData = createAction(
    DataActions.GET_DATA
);

export const GetDataSuccess = createAction(
    DataActions.GET_DATA_SUCCESS,
    props<{data: Data[]}>()
);


export const GetDataFailure = createAction(
    DataActions.GET_DATA_FAILURE,
    props<{error: string}>()
);
