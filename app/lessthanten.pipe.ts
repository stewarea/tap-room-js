import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "display_option",
  pure: false
})

export class LessThanTenPipe implements PipeTransform {
  transform(input: Keg[], status) {

    var output: Keg[] = [];
    if (status === "low") {
      for (var i =0; i < input.length; i++){
        if(input[i].beers <= 10 && input[i].beers > 0) {
          output.push(input[i]);
      }
    }
    return output;
  } else if (status === "empty") {
        for (var i =0; i < input.length; i++){
          if (input[i].beers === 0) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
}
