import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
})
export class ChildComponent implements OnInit {
  @Input()
  name: string;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
