import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorsJoin'
})
export class AuthorsJoinPipe implements PipeTransform {

  transform(value: { name: string }[], sep = ','): string {
    return value?.length ? value.map(e => e.name).join(sep) : '';
  }

}
