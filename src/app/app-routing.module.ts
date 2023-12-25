import { NgModule } from '@angular/core';
import {  } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule}   from '@angular/forms';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { AuthGuard } from './components/guard/auth.guard';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';

const routes: Routes = [

  {path: 'login', component:SignInComponent},
  {path: 'signup', component:SignUpComponent},
  {path: 'product-list', component:ProductListComponent, pathMatch:'full', canActivate: [AuthGuard]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }
