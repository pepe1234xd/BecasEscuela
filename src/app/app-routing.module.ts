import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerBecasComponent } from './alumnos/ver-becas/ver-becas.component';
import { IndexComponent } from './home/index/index.component';


const routes: Routes = [
  {
    path:'index',
    component: IndexComponent
  },
  {
     path: 'ver-becas/:id', 
     component: VerBecasComponent 
  },
  {
    path:'**',
    redirectTo:'index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
