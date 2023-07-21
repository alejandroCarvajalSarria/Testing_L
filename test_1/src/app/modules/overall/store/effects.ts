import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { DataService } from "../services/data.service";
import { map, mergeMap, catchError, of } from 'rxjs';
import * as DataActions from './actions'


@Injectable()
export class DataEffects {
    getData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DataActions.GetData),
            mergeMap(()=>{
                return this.dataService
                    .getData()
                    .pipe(map((data:any) => DataActions.GetDataSuccess({ data })),
                        catchError(error => 
                            of(DataActions.GetDataFailure({ error: error.message}))
                            )
                    )
            })
        )
    )

    constructor(private actions$: Actions, private dataService: DataService ){}

}
