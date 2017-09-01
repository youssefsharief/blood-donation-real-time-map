import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import { modules, addUI } from './esri-helper';

@Component({
	selector: 'esri-map',
	templateUrl: './esri-map.component.html',
	styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {
	public mapView: any;
	@ViewChild('mapViewNode') private mapViewEl: ElementRef;
    @Output() clicked = new EventEmitter();
	
	constructor(
		private esriLoader: EsriLoaderService
	) { }

	public ngOnInit() {
		this.loadMap([45, 45], 'topo', 12)
	}
	
	loadMap(center = [45, 45], basemap = 'topo', zoom = 10, container = this.mapViewEl.nativeElement) {
		const self=this
		return this.esriLoader.load({
			url: 'https://js.arcgis.com/4.3/'
		}).then(() => {
			this.esriLoader.loadModules(modules).then(([
				map,
				MapView,
				Track,
				Search,
				webMercatorUtils
			]) => {
				;

				var map = new map({
					basemap
				});

				var view = new MapView({
					map,
					container,
					center,
					zoom
				});

				var track = new Track({
					view: view
				});


				var searchWidget = new Search({
					view: view
				});

				addUI(view, track, searchWidget)
				view.on("click", function (evt) {
					console.log(evt.mapPoint);
					self.clicked.emit(evt.mapPoint)
				})


				// The sample will start tracking your location
				// once the view becomes ready
				view.then(function () {
					track.start();
				});




				// this.mapView = new MapView(view);
			});
		});
	}
}

