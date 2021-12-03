import { Component, OnInit } from '@angular/core';
import { TvShow } from 'src/app/core/models';
import { TvShowsService } from 'src/app/core/services';

@Component({
	selector: 'app-tv-shows',
	templateUrl: './tv-shows.component.html',
	styles: []
})
export class TvShowsComponent implements OnInit {

	tvShows: Array<TvShow> = [];

	constructor(private readonly service: TvShowsService) { }
	
	ngOnInit(): void {
		const $c: TvShowsComponent = this;
		this.service.findAll().subscribe(value => $c.tvShows = value);
	}
	
}
