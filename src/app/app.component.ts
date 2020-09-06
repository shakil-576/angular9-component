import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "my-learn";

  list: string[] = [];

  display(event) {
    this.list.push(event);
    console.log("Event from child " + event);
  }
}
