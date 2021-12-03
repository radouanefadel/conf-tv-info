import { FooterComponent, HeaderComponent } from './layouts';
import { 
	HomeComponent,
	TvShowsComponent,
	TvShowWidgetComponent,
} from './views';

export const Layouts: Array<any> =  [
	HeaderComponent,
	FooterComponent,
];

export const Components: Array<any> = [
	TvShowsComponent,
	TvShowWidgetComponent,
];

export const Pages: any = {
	HomeComponent,
	TvShowsComponent,
}