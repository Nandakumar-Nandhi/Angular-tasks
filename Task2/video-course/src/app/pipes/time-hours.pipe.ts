import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeHours'
})
export class TimeHoursPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value!==""){
      let input=parseInt(value);
      let hours=Math.floor(input / 60);
      let minutes=Math.floor(input % 60);
      return hours+"h"+" "+minutes+"min";
    }
    return "";
  }

}
