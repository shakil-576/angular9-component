import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan, take } from 'rxjs/operators';

@Component({
  selector: 'app-promise-vs-observables',
  templateUrl: './promise-vs-observables.component.html',
  styleUrls: ['./promise-vs-observables.component.scss']
})
export class PromiseVsObservablesComponent implements OnInit {

  count: number = 0;
  constructor() { }

  async ngOnInit() {
    // this.getClick();
    // const data = await fromEvent(document, 'click')
    //   // .pipe(scan(count => count + 1, 0))
    //   .pipe(take(1))
    //   .toPromise();
    // // .subscribe(count => this.count = count);
    // console.log(data);

    //Promise Example

    // this.createPromise(false)
    //   .then((response) => {
    //     console.log(response);
    //   })

    //ASync Call
    // this.createPromise(true)
    //   .then((response) => {
    //     console.log("Sucess Response");
    //     console.log(response);
    //   }).catch(error => {
    //     console.log("Error received", error)
    //   })

    //Sync call
    try {

      const response = await this.createPromise(true)
      console.log(response);
    } catch (error) {
      console.log("Error received", error)
    }

    console.log("Promise call done");

  }

  createPromise(failIt: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
      if (failIt) {
        throw new Error("Exception occured while retrieving the user name");
      }
      setTimeout(() => {
        resolve("USER_NAME");
      }, 5000)
    })
  }

  private getClick() {
    document.addEventListener('click', () => {
      console.log("Click event trigged !!");
    });
  }

  squareNumber(num: number) {
    const squareResult = num * num;
    console.log(squareResult)
  }

}
