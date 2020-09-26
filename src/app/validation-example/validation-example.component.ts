import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-validation-example',
  templateUrl: './validation-example.component.html',
  styleUrls: ['./validation-example.component.scss']
})
export class ValidationExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  private traditionalMethodOfValidation() {
    const name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
    if (!name.value) {
      document.getElementById("name_required").style.display = "block";
    } else {
      document.getElementById("name_required").style.display = "none";
    }

    if (name.value.indexOf("@") <= -1) {
      document.getElementById("name_email").style.display = "block";
    } else {
      document.getElementById("name_email").style.display = "none";
    }

    console.log(name.value);
  }
}
