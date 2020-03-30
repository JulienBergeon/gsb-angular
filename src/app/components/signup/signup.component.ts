import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UserDTO } from 'src/model/userDto';
import { AuthService } from '../../api/services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  newUser: UserDTO;
  roles: string[] = ['Patient', 'Doctor'];
  genders: string[] = ['Male', 'Female'];
  hide = {pwd: true, retypePwd: true};

  constructor( 
    private readonly api: ApiService,
    private readonly fb: FormBuilder,
    private readonly as: AuthService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      role: [''],
      gender: [''],
      address: [''],
    });
  }

  signup(){
    console.log("oui");
    if (!this.form.invalid) {
      console.log("non");
      const user = this.form.value;
      //user.firstName = this.form.value['email'];
      console.log(user.firstName);
      console.log(user.lastName);
      console.log(user.email);
      console.log(user.password);
      console.log(user.role);
      console.log(user.gender);
      console.log(user.address);
      // this.newUser.firstName = user.firstName;
      // this.newUser.lastName = user.lastName;
      // this.newUser.email = user.email;
      // this.newUser.password = user.email;
      // this.newUser.role = user.role;
      // this.newUser.gender = user.gender;
      // this.newUser.address = user.address;
      //console.log(this.newUser.firstName);
      //this.api.put(`auth/signup`, user).toPromise().then(sucess => console.log(sucess), error=> console.log(error));
      this.as.putAuthSignup(user).toPromise().then(sucess => console.log(sucess), error=> console.log(error));
    }
  }
}
