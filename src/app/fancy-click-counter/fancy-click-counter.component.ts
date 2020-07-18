import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'app-fancy-click-counter',
	templateUrl: './fancy-click-counter.component.html',
	styleUrls: ['./fancy-click-counter.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FancyClickCounterComponent implements OnInit, AfterViewInit {

	@Input()
	text: string;

	@Output()
	counter: EventEmitter<number>;
	clicks: number;

	@ViewChild("body", {static: true})
	bodyRef: ElementRef<HTMLDivElement>;

	@ViewChild("start", {static: true})
	startRef: ElementRef<HTMLDivElement>;

	@ViewChild("end", {static: true})
	endRef: ElementRef<HTMLDivElement>;

	isInitialized = false;
	barWidth: number;
	barPos: number;

	constructor(private changeDetector: ChangeDetectorRef) {
		this.counter = new EventEmitter<number>();
	}

	ngOnInit() {
		this.clicks = 0;
		this.barWidth = 0;
		this.barPos = 0;
	}

	ngAfterViewInit() {
		const bodyRect = this.bodyRef.nativeElement.getBoundingClientRect();
		const startRect = this.startRef.nativeElement.getBoundingClientRect();
		const endRect = this.endRef.nativeElement.getBoundingClientRect();
		this.barPos = startRect.x - bodyRect.x + startRect.width;
		this.barWidth = endRect.x - startRect.x - startRect.width;
		this.isInitialized = true;

		const timeoutId = setTimeout(() => {
			this.changeDetector.markForCheck();
			clearTimeout(timeoutId);
		}, 0)
	}

	add() {
		this.clicks++;
	}

	emit(event: MouseEvent) {
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();
		this.counter.emit(this.clicks);
	}
}
