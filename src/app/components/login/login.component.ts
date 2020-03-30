import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/services';
import { CheckCredentialDto, TokenDto } from 'src/app/api/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cookie, CookieService } from '@ngx-toolkit/cookie';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  snackConfig: MatSnackBarConfig = {duration: 2000};

  constructor(
    private readonly fb: FormBuilder, 
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly cookieSrv: CookieService,
    private readonly snackBar: MatSnackBar,
  ) {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['']
    });
  }

  ngOnInit() {
  }

  login(): void {
    if( this.form.valid) {
      const credentials: CheckCredentialDto = {
        email: this.form.value.email,
        password: this.form.value.password
      };
      
      this.authService.postAuthLogin(credentials).toPromise().then(
        (token: TokenDto) => {
          this.cookieSrv.setItem('token', token.access_token);
          this.router.navigate(['home']);
        }, 
        error => this.snackBar.open(error.status === 401 ? error.error.message : "Email incorrect.", 'OK', this.snackConfig)
      );
    } else {
      this.snackBar.open("Email incorrect.", 'OK', this.snackConfig)
    }
    
    
  }

}