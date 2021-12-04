import { FooterComponent, HeaderComponent } from './layouts';
import { 
	EpisodesComponent,
	HomeComponent,
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
	TvShowComponent,
	TvShowsComponent,
	TvShowWidgetComponent,
];

export const Pages: any = {
	HomeComponent,
	TvShowComponent,
	TvShowsComponent,
}