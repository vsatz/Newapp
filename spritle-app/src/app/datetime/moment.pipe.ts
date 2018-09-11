import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'spritleMoment'
})
export class MomentPipe implements PipeTransform {
  transform(millisecondsFromEpoch: number): string {
    return moment(millisecondsFromEpoch).fromNow();
  }
}
