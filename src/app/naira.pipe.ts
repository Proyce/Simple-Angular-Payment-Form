import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naira'
})
export class NairaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
