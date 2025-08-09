import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKHR'
})
export class ToKHRPipe implements PipeTransform {

  transform(amount:number, rate:number): unknown {
    let res:number = amount * rate;
    let local_res:string = res.toLocaleString() + " ៛"
    return local_res;
  }

}
