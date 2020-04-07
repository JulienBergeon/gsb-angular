import { CreateMedicinesDto } from './../../api/models/create-medicines-dto';
import { MedicinesDto } from './../../api/models/medicines-dto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ListService } from 'src/app/services/list/list.service';
import { MedicinesService } from 'src/app/api/services';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {

  form: FormGroup;
  medicaments : MedicinesDto[] = [];
  displayedMedicines = [];
  paginatorInfo: PageEvent = {pageSize: 10, pageIndex: 0, length: this.medicaments.length};


  constructor(
    private readonly listSrv: ListService,
    private readonly medicineService: MedicinesService,
    private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        name: [''],
        description: [''],
        price: [''],
        image: [''],
      });
  }

  ngOnInit() {
    this.getMedicines();
  }

  getMedicines() {
    this.medicineService.getMedicinesAll().toPromise().then(
      medicines => {
        this.medicaments = medicines;
        this.displayedMedicines = this.listSrv.paginateElements<MedicinesDto>(this.medicaments, this.paginatorInfo);
      }
    );
  }

  search(query: string): void {
    this.displayedMedicines = this.medicaments;

    if (query !== ''){
      this.displayedMedicines = this.medicaments.filter((medicament) => {

        const len = query.length;
        const name = medicament.name.substr(0, len).toLocaleLowerCase();

        const nameMatched = name === query.toLowerCase();

        return nameMatched;
      });
    }

    this.paginatorInfo.pageIndex = 0;
    this.paginatorInfo.length = this.displayedMedicines.length; 
    this.displayedMedicines = this.listSrv.paginateElements<MedicinesDto>(this.displayedMedicines, this.paginatorInfo); 
  }

  pageChange(event: PageEvent): void {
    this.paginatorInfo = event;
    this.displayedMedicines = this.listSrv.paginateElements<MedicinesDto>(this.medicaments, this.paginatorInfo);
  }

  delete(id: number): void {
    this.medicineService.deleteMedicinesId(id).toPromise().then(
      () => this.getMedicines()
    );
  }

  onSubmit() {
    const med: CreateMedicinesDto = this.form.value;
    this.medicineService.putMedicines(med).toPromise().then(
      () => this.getMedicines()
    );
  }
}
