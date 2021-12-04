import { FooterComponent, HeaderComponent } from './layouts';
import { 
	AboutComponent,
	EpisodesComponent,
	HomeComponent,
	NotFoundComponent,
	TvShowComponent,
	TvShowsComponent,
	TvShowWidgetComponent,
} from './views';

export const Layouts: Array<any> =  [
	HeaderComponent,
	FooterComponent,
];

export const Components: Array<any> = [
	EpisodesComponent,
	NotFoundComponent,
	TvShowComponent,
	TvShowsComponent,
	TvShowWidgetComponent,
];

export const Pages: any = {
	HomeComponent,
	AboutComponent,
	NotFoundComponent,
	TvShowComponent,
	TvShowsComponent,
}