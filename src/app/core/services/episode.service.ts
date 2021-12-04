import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models';
import { BaseService } from './service';

@Injectable({
	providedIn: 'root'
})
export class EpisodeService extends BaseService{
	
	constructor(private readonly http: HttpClient) {
		super('episodes');
	}

	getSeasonEpisodes(seasonId: number): Observable<Array<Episode>> {
		const url: string = `${this.ORIGIN}/seasons/${seasonId}/episodes`;
		return this.http.get<Array<Episode>>(url);
	}
}
