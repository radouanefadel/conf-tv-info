import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages } from './ui';

const routes: Routes = [
  {
    path: 'home',
		component: Pages.HomeComponent,
  }, {
		path: '',
		pathMatch: 'full',
		redirectTo: '/home',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
