import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'main',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private router: Router) {}

	ngOnInit(): void {
	}

	redirect(pagename: string) {
		this.router.navigate(['/'+pagename]);
	}

}
