import { Injectable } from "@angular/core";
import { StudentService } from "./student.service";

// @Injectable()
// providedIn: "root",
@Injectable({
  providedIn: "root",
})
export class MyTestServiceService {
  myServiceName: string = "StudentService";

  constructor(public studentService: StudentService) {
    alert(studentService.name);
  }
}

//
