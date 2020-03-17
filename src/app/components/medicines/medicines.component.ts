import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api/api.service';
import { ListService } from 'src/app/services/list/list.service';
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

  constructor(private readonly api: ApiService) {}

  ngOnInit() {
    this.getMedicines(0, 5, this.search);
  }


  getMedicines(pageIndex: number, pageSize: number, search: string): void {
    this.api.get('medicines', {pageIndex, pageSize, search}).toPromise().then(
      paginatedMedicines => {
        this.medicines = paginatedMedicines.elements;
        this.paginator.length = paginatedMedicines.nbElements;
      },
      error => console.log(error)
    );
  }
  
  pageChange(event: PageEvent): void {
    // TODO handle pageSize change only
    this.getMedicines(event.pageIndex, event.pageSize, this.search);
  }

  delete(id){
    console.log(id);
    console.log('medicines/'+id);
    
    this.api.delete('medicines/'+id, id).toPromise().then(sucess => console.log(sucess), error=> console.log(error));
  }
}
