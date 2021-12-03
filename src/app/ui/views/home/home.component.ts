import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styles: [],
})
export class HomeComponent implements OnInit {
	
	constructor(private readonly router: Router) { }
	
	ngOnInit(): void { }

	goToTvShows(): void {
		this.router.navigate(['/tv-shows']);
	}
	
}
