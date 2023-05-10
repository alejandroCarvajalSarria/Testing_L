import { Course } from '../model/course';


export function sortCoursesBySeqNo(c1: any, c2: any) {
  return c1.seqNo - c2.seqNo;

}