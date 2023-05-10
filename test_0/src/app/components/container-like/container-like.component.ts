import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { DataService } from 'src/app/services/data/data.service';
import { Observable, map} from 'rxjs';
import { sortCoursesBySeqNo } from 'src/app/shared/sort-course-by-seq';


@Component({
  selector: 'app-container-like',
  templateUrl: './container-like.component.html',
  styleUrls: ['./container-like.component.css']
})
export class ContainerLikeComponent implements OnInit {

  constructor(private coursesService: DataService){}

  beginnerCourses$!: Observable<Course[]>;

  advancedCourses$!: Observable<Course[]>;
  
  ngOnInit(){
    this.reloadCourses(); 
  }

  reloadCourses() {
    const courses$ = this.coursesService.findAllCourses();
    this.beginnerCourses$ = this.filterByCategory(courses$, 'BEGINNER');
    this.advancedCourses$ = this.filterByCategory(courses$, 'ADVANCED');
  }

  filterByCategory(courses$: Observable<Course[]>, category:string) {
    return courses$.pipe(
      map((courses:any) => courses.filter((course:any) => course.category === category).sort(sortCoursesBySeqNo) )
    );
  }

}
