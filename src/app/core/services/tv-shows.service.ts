import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TvShow } from '../models';
import { BaseService } from './service';

@Injectable({
	providedIn: 'root'
})
export class TvShowsService extends BaseService{
	private tvShows: Array<TvShow>|Array<any> = [];

	constructor(private http: HttpClient) { super('shows'); }

	public findAll(): Observable<Array<TvShow>> {
		return this.http.get<Array<TvShow>>(this.endPoint);
	}

	public findByPage(page: number): Observable<Array<TvShow>> {
		return this.http.get<Array<TvShow>>(`${this.endPoint}?page=${page}`);
	}
}
