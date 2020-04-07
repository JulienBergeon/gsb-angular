import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDTO } from 'src/model/userDto';
import { AuthService } from '../../api/services/auth.service';

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

  signup() {
    if (!this.form.invalid) {
      const user = this.form.value;
      this.as.putAuthSignup(user).toPromise().then();
    }
  }
}
