import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { DataService } from 'src/app/services/data/data.service';
import { Observable, map} from 'rxjs';
import { sortCoursesBySeqNo } from 'src/app/shared/sort-course-by-seq';
import * as $ from 'jquery';

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

  chooseCourses(type:string){
      console.log('type', type);


      switch(type){

        case 'advanced':{
          console.log( $('#beginner'));
          
          $('#beginner').css("display", "none");
          $('#advanced').css("display", "block");
          console.log("Displayed advanced");
          
          break;
        }

        case 'beginner':{
          this.advancedCourses$ = new Observable;
          $('#advanced').css("display", "none");
          $('#beginner').css("display", "block");
          console.log("Displayed beginner");
          break;
        }
      }

    }

}
