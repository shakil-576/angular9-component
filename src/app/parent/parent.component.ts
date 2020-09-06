import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"],
})
export class ParentComponent implements OnInit {
  childAge: number;
  constructor() {}

  ngOnInit() {
    console.log("from id");
    console.log(document.getElementById("shakil"));
  }

  getMyChildAge(age: number) {
    this.childAge = age;
  }
}
