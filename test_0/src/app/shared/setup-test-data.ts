import {Course} from '../model/course';
import {sortCoursesBySeqNo} from './sort-course-by-seq';
import { COURSES } from './db-data';


export function setupCourses() : Course[] {
  return Object.values(COURSES).sort(sortCoursesBySeqNo) as Course[];
}


