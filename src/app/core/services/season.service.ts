import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './service';
import { Season } from '../models';

@Injectable({
	providedIn: 'root'
})
export class SeasonService extends BaseService{
	
	constructor(private readonly http: HttpClient) { super('seasons'); }

	findSeasonsByShowId(showId: number): Observable<Array<Season>> {
		const url = `${this.ORIGIN}/shows/${showId}/seasons`;
		return this.http.get<Array<Season>>(url);
	}
}
