import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naira'
})
export class NairaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return '';
    }
    return value * 471.372;
  }
}
