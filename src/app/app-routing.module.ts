import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAwesomeComponent } from './components/awesome/list-awesome/list-awesome.component';

const routes: Routes = [
  { path: 'list', component: ListAwesomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
