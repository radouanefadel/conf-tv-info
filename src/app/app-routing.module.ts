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
	}, {
		path: 'tv-shows/:id',
		component: Pages.TvShowComponent,
	}, {
		path: 'tv-shows',
		component: Pages.TvShowsComponent,
	}, {
		path: 'about',
		component: Pages.AboutComponent,
	}, {
		path: '**',
		component: Pages.NotFoundComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
