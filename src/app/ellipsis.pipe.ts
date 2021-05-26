import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //Decorator
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    console.log(args[1]);
    if(value.length >args[0]){
      return value.substring(0,args[0])+'...';
    }
    return value;
  }

}
