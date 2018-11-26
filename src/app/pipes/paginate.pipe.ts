import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  @memo((...args: any[]): string => JSON.stringify(args))
  transform(array: any[], page_size: number | string, page_number: number): any[] {
    if (!array.length) return [];
    (window as any).arreglo = array
    if (page_size === 'all') {
      return array
    }
    page_size = page_size || 5
    page_number = page_number || 1
    --page_number
    // @ts-ignore
    return array.slice(page_number * page_size, (page_number + 1) * page_size)
  }

}