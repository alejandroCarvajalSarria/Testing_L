import { Data } from "./data.interface";

export interface DataState{
    isLoading:boolean;
    data: Data[],
    error: string | null;
}