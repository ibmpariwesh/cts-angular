import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //Decorator
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: String[]): unknown {
    if(value.length >5){
      return value.substring(0,5)+'...';
    }
    return value;
  }

}
