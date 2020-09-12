import { Component } from "@angular/core";
import { MyTestServiceService } from "./my-test-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "my-learn";

  constructor(public serviceObj: MyTestServiceService) {}

  list: string[] = [];

  display(event) {
    this.list.push(event);
    console.log("Event from child " + event);
  }
}
