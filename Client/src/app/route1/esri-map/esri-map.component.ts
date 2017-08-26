import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';

@Component({
	selector: 'esri-map',
	templateUrl: './esri-map.component.html',
	styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {
	public mapView: any;
	@ViewChild('mapViewNode') private mapViewEl: ElementRef;

	constructor(
		private esriLoader: EsriLoaderService
	) { }

	public ngOnInit() {
		this.loadMap([45,45],'topo',12)
	}

	loadMap(center=[45,45], basemap='topo', zoom=10,container=this.mapViewEl.nativeElement) {
		return this.esriLoader.load({
			url: 'https://js.arcgis.com/4.3/'
		}).then(() => {
			this.esriLoader.loadModules([
				"esri/Map",
				"esri/views/MapView",
			]).then(([
				map,
				MapView
			]) => {
				var map = new map({
					basemap
				});
				var view = new MapView({
					map,
					container,
					center,
					zoom
				});
				this.mapView = new MapView(view);
			});
		});
	}
}

