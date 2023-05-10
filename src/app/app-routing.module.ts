import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./auth/register/register.component";
import {JobsEditComponent} from "./jobs-card/jobs-edit/jobs-edit.component";
import {JobsDetailComponent} from "./jobs-card/jobs-detail/jobs-detail.component";
import {JobResolver} from "./jobs-card/job.resolver";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path : 'jobs-edit', component : JobsEditComponent},
  {path: "job/:id", component: JobsDetailComponent, resolve: [JobResolver]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
