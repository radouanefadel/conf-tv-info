import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Season, TvShow } from 'src/app/core/models';
import { TvShowsService, SeasonService, } from 'src/app/core/services';

@Component({
	selector: 'app-tv-show',
	templateUrl: './tv-show.component.html',
	styles: [],
})
export class TvShowComponent implements OnInit {
	tvShow: TvShow|any;
	seasons: Array<Season> = [];
	notFound: boolean = false;
	selectedSeason: Season|undefined;
	constructor(
		private readonly route: ActivatedRoute,
		private readonly showService: TvShowsService,
		private readonly seasonService: SeasonService,
	) { }

	get id(): number {
		let id: number = 0;
		this.route.params.subscribe(params => {
			id = params['id'];
		});
		return id;
	}
	
	ngOnInit(): void {
		const $c: TvShowComponent = this;
		this.route.params.subscribe(params => {
			const id: number = params['id'];
			$c.showService.findOneById(id).subscribe((item: TvShow) => {
				$c.tvShow = item;
				$c.seasonService.findSeasonsByShowId(id).subscribe((seasons: Array<Season>) => {
					$c.seasons = seasons;
				});
			}, (error: any) => { $c.notFound = true; });
		});
	}

	selectSeason(season: Season): void { this.selectedSeason = season; }
}
