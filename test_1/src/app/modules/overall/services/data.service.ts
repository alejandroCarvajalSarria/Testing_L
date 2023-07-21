import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { Data } from '../types/data.interface';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService : HttpService) { }

  getData(): Observable<Data[] >{
    return this.httpService.get('https://random-data-api.com/api/v2/users?size=30')
      .pipe(
        map((res:Data[])=>{
          return res
        }),
        catchError((err)=>{
          console.error(err);
          return of([]);
        })
      )
  }

}
