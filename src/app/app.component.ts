import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'ng-basics';
	text = "click me to emit ";
	clicks = 0;

	rerender(num: number) {
		this.clicks = num;
	}
}
