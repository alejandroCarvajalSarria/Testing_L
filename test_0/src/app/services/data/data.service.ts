import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from 'src/app/model/course';
import { Lesson } from 'src/app/model/lesson';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    findCourseById(courseId: number): Observable<Course> {
        return this.http.get<Course>(`/api/courses/${courseId}`);
    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get('/api/courses')
            .pipe(
                map((res: any) => res['payload'])
            );
    }

    saveCourse(courseId: number, changes: Partial<Course>): Observable<Course> {
        return this.http.put<Course>(`/api/courses/${courseId}`, changes);
    }

    findLessons(
        courseId: number, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3): Observable<Lesson[]> {

        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map((res: any) => res["payload"])
        );
    }
}
