import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { ContainersComponent } from './containers/containers.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
    {path:'',component:ContainersComponent},
    {path:'add',component: ParentComponent ,data:{mode:'add'}},
    {path:'home',component: ContainersComponent},
    {path:'edit/:id',component: ParentComponent,data:{mode:'edit'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddCardComponent,ContainersComponent,ParentComponent];