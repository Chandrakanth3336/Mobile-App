import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthenticateGuard } from './authenticate.guard';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthenticateGuard]},
  {path:'home',component:HomeComponent },
  {path:'products',component:ProductsComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
