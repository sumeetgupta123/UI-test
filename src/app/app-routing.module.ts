import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [

  {
    path: '', redirectTo:'Dashboard', pathMatch:'full'
  },
  {
    path: 'Dashboard', component: DashboardComponent 
  },
  {
    path: 'task', component: TaskComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
