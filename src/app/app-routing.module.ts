import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddComponent } from './components/employees/add/add.component';
import { EditComponent } from './components/employees/edit/edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees' },
  { path: 'employees', 
    component: EmployeesComponent
  },
  { path: 'employees/add', component: AddComponent },
  { path: 'employees/edit/:employeeId', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
