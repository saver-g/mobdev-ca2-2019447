import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deathfilter'
})
export class DeathfilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
