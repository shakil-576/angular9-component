import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipe-example",
  templateUrl: "./pipe-example.component.html",
  styleUrls: ["./pipe-example.component.scss"],
})
export class PipeExampleComponent implements OnInit {
  name: string = "shakil ansari";
  date: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
