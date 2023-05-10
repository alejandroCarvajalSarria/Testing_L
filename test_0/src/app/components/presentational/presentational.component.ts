import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-presentational',
  templateUrl: './presentational.component.html',
  styleUrls: ['./presentational.component.css']
})
export class PresentationalComponent {


  @Input()
  list!: Course[];

  @Output()
  courseEdited = new EventEmitter();



}
 