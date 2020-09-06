import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child-new",
  templateUrl: "./child-new.component.html",
  styleUrls: ["./child-new.component.scss"],
})
export class ChildNewComponent implements OnInit {
  @Input("name")
  childName: string;

  @Output()
  childAge = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  sayMyAgeToParent() {
    this.childAge.emit(10);
  }
}
