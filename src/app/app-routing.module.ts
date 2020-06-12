import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [{
path:'',
pathMatch:'full',
redirectTo:'login'
},
{
  path:'login',
  component:LoginComponent
},
{
path:'register',
component:RegisterComponent
},
{
  path:'home',
  component:HomeComponent,
  children:[{
    path:'schedules',
    component:SchedulesComponent
    
     }]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
