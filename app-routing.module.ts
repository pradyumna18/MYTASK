import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormComponent } from './form/form.component';



const routes: Routes = [
 {
  path:'', redirectTo:'login', pathMatch:'full'
 },
 {
  path:'login',component:LoginComponent
 },
 {
  path:'signup',component:SignupComponent
 },
 {
  path:'form',component:FormComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
