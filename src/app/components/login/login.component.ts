import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  hide = true;
  //hide = {pwd: true, retypePwd: true};

  constructor( 
    private readonly api: ApiService,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  login(){

  // createDoctor() {
  //   this.api.put('/users', doctor).toPromise().then(
  //     success => console.log(success), error => console.log(error)
  //   );
  // }
    console.log("oui");
    if (!this.form.invalid) {
      console.log("non");
      const user = this.form.value;
      //user.firstName = this.form.value['email'];
      console.log(user.email);
      console.log(user.password);
      // this.newUser.firstName = user.firstName;
      // this.newUser.lastName = user.lastName;
      // this.newUser.email = user.email;
      // this.newUser.password = user.email;
      // this.newUser.role = user.role;
      // this.newUser.gender = user.gender;
      // this.newUser.address = user.address;
      //console.log(this.newUser.firstName);
      window.open();
      this.api.post(`auth/login`, user).toPromise().then(sucess => console.log(sucess), error=> console.log(error));
    }
  }
}
