import { Component, OnInit } from '@angular/core';
import { CheckCredentialDto, TokenDto } from 'src/app/api/models';
import { Cookie, CookieService } from '@ngx-toolkit/cookie';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}
  cooc: CookieService;
  ngOnInit() {
    
    console.log(this.cooc.getItem('token'));
    
  }

}
