import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api/api.service';
import { MedicinesInterface } from 'src/model/medicines.interface';



@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {
  search = '';
  medicines: MedicinesInterface[] = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageIndex = 0;
  pageSize = 5;

  constructor(private readonly api: ApiService) {}

  ngOnInit() {
    this.getMedicines(this.search);
  }


  getMedicines(search: string): void {
    this.api.get('medicines', {pageIndex: this.pageIndex, pageSize: this.pageSize, search}).toPromise().then(
      paginatedMedicines => {
        this.medicines = paginatedMedicines.elements;
        this.paginator.length = paginatedMedicines.nbElements;
      },
      error => console.log(error)
    );
  }

  pageChange(event: PageEvent): void {
    if (event.pageSize !== this.pageSize) {
      this.paginator.firstPage();
    }

    this.pageIndex = this.paginator.pageIndex;
    this.pageSize = this.paginator.pageSize;


    this.getMedicines(this.search);
  }

  searchChanged(search: string) {
    this.paginator.firstPage();
    this.search = search;
    this.getMedicines(this.search);
  }

  delete(id: number): void {
    this.api.delete(`medicines/${id}`, id).toPromise().then(
      () => {
        this.getMedicines(this.search);
      },
      error => console.log(error)
    );
  }
}
