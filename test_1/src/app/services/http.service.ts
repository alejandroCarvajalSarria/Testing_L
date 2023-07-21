import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  get(url: string, httpOptions?: any): Observable<any> {
    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError('Something bad happened; please try again later.');
  }

  constructor(private http: HttpClient) { }
}


