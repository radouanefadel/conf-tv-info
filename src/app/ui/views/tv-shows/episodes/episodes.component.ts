import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Episode, Season } from 'src/app/core/models';
import { EpisodeService } from 'src/app/core/services';

@Component({
	selector: 'app-episodes',
	templateUrl: './episodes.component.html',
	styles: [],
})
export class EpisodesComponent implements OnInit, OnChanges {
	@Input() season: Season|any;
	episodes: Array<Episode> = [];

	constructor(private readonly service: EpisodeService) { }
	
	ngOnInit(): void { }

	ngOnChanges(): void {
		const $c: EpisodesComponent = this;
		if (!isNaN(this.season?.id)) {
			$c.service.getSeasonEpisodes($c.season.id)
				.subscribe(data => $c.episodes = data);
		}
	}
	
}
