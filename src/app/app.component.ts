import { Component } from '@angular/core';
import {AuthService} from './components/auth/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(
    private authService:AuthService,
    private router: Router
    ){

  }
  logout(){
 this.authService.logout()
 console.log("logout")
 this.router.navigate(['/login'])

  }
}
