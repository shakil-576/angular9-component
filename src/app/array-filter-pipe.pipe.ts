import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "arrayFilterPipe",
})
export class ArrayFilterPipePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let newArray = [];

    value.forEach((element) => {
      if (element !== args[0]) {
        newArray.push(element);
      }
    });

    console.log("Original Value " + value);
    console.log("Arguments " + args);
    return newArray;
  }
}
