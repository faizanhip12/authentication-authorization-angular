import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  loginForm?: any;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log("this.loginForm", this.loginForm)
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      this.authService.login(username, password).subscribe(res => {
        console.log("res", res)
        this.router.navigate(['/product-list']);
      })
      // Call the authentication service's login method
      //  if (this.authService.login(username, password)) {
      //   // Navigate to the ProductListComponent upon successful login
      //   this.router.navigate(['/product-list']);
      // } else {
      //   // Handle authentication error (show error message, etc.)
      // }

    }
  }
}
