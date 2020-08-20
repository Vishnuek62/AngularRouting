import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // if the empty path is prefix to the url, redirects to /departmnts,
  // means all the prefix urls is mathing, so always redirected to departments
  //{ path  : "" , redirectTo : '/department', pathMatch : 'prefix' },

  // for this we add full in pathMatch
  { path  : "" , redirectTo : '/department', pathMatch : 'full' },
  
  { path  : "employee" , component : EmployeeComponent },
  { path  : "department" , component : DepartmentComponent },
  // wild card route be the last route of the configuraion
  // bcoz router tries to match from top.
  // if wild card is in top, it matches every url and shows page not found
  { path : "**" , component : PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ EmployeeComponent,
                                   DepartmentComponent,
                                   PageNotFoundComponent]
