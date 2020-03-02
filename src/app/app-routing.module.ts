import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { ContainersComponent } from './containers/containers.component';


const routes: Routes = [
    {path:'add',component: AddCardComponent },
    {path:'home',component: ContainersComponent},
    {path:'edit',component: AddCardComponent},
    {path:'edit/:id',component: AddCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddCardComponent,ContainersComponent];