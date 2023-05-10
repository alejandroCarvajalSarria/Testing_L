import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerLikeComponent } from './components/container-like/container-like.component';

const routes: Routes = [
  {path: '', component: ContainerLikeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
