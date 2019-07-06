import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithoutTime:any = new Date (today.getFullYear(),today.getMonth(),today.getDate())

    var daysLasted = Math.abs(value-todayWithoutTime)
    const secondsInADay = 86400;

    var daysLastedSeconds= daysLasted*0.001;
    var dateCounter  = daysLastedSeconds/secondsInADay;

    if (dateCounter >= 1 && value > todayWithoutTime){
      return 0;
    }else{
      return Math.round(dateCounter);
    }

    

  }

}
