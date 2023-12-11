import { NgModule } from '@angular/core';
import {  } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule}   from '@angular/forms';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { AuthGuard } from './components/guard/auth.guard';

const routes: Routes = [
  {path: '', component:ProductListComponent, pathMatch:'full', canActivate: [AuthGuard]},
  {path: 'login', component:SignInComponent},

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
