import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  paginateElements<T>(elements: T[], paginator: PageEvent): T[] {
    return elements.filter((element, index) => {
      const start = paginator.pageIndex * paginator.pageSize;
      const end = start + paginator.pageSize - 1;
      return index >= start && index <= end;
    });
  }
}
