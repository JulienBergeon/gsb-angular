import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { UsersService } from 'src/app/api/services';
import { ListService } from 'src/app/services/list/list.service';
import { UserDto } from './../../api/models/user-dto';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  newDoc: UserDto;
  form: FormGroup;
  doctors: UserDto[] = [];
  displayedDoctors = [];
  paginatorInfo: PageEvent = {pageSize: 10, pageIndex: 0, length: this.doctors.length};

  constructor(
    private readonly listSrv: ListService,
    private formBuilder: FormBuilder,
    private readonly userService: UsersService,
  ) {
    this.form = this.formBuilder.group({fn: '', ln: ''});
  }

  ngOnInit() {
    this.getUserDoctors();
  }

  getUserDoctors() {
    this.userService.getUsersDoctors().toPromise().then(
      doctors => {
        this.doctors = doctors;
        this.displayedDoctors = this.listSrv.paginateElements<UserDto>(this.doctors, this.paginatorInfo);
      }
    );
  }

  search(query: string): void { 
    this.displayedDoctors = this.doctors;

    if (query !== '') {
      this.displayedDoctors = this.doctors.filter((doctor) => {

        const len = query.length;
        const firstName = doctor.firstName.substr(0, len).toLocaleLowerCase();
        const lastName = doctor.lastName.substr(0, len).toLowerCase();

        const firstNameMatched = firstName === query.toLowerCase();
        const lastNameMatched = lastName === query.toLowerCase();

        return firstNameMatched || lastNameMatched;
      });
    }

    this.paginatorInfo.pageIndex = 0;
    this.paginatorInfo.length = this.displayedDoctors.length;
    this.displayedDoctors = this.listSrv.paginateElements<UserDto>(this.displayedDoctors, this.paginatorInfo);
  }

  pageChange(event: PageEvent): void {
    this.paginatorInfo = event;
    this.displayedDoctors = this.listSrv.paginateElements<UserDto>(this.doctors, this.paginatorInfo);
  }

  delete(id: number): void {
    this.userService.deleteUsersId(id).toPromise().then(
      () => this.getUserDoctors()
    );
  }
}
