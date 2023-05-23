import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkIfHaveValue'
})
export class CheckIfHaveValuePipe implements PipeTransform {

  transform(value: string): string {
    if(value === 'N/A') {
      return 'There is no information';
    } else {
      return value;
    }
  }

}
