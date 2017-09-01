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
		this.loadMap([45, 45], 'topo', 12)
	}

	loadMap(center = [45, 45], basemap = 'topo', zoom = 10, container = this.mapViewEl.nativeElement) {
		return this.esriLoader.load({
			url: 'https://js.arcgis.com/4.3/'
		}).then(() => {
			this.esriLoader.loadModules([
				"esri/Map",
				"esri/views/MapView",
				"esri/widgets/Track",
				"esri/widgets/Search",
				// "esri/geometry/webMercatorUtils"
			]).then(([
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
				map.on("load", function () {
					//after map loads, connect to listen to mouse move & drag events
					map.on("mouse-move", alert);
					map.on("mouse-drag", alert);
					map.on("mouse-click", ()=>{
						console.log('dsds');
						
					})
				})
				var view = new MapView({
					map,
					container,
					center,
					zoom
				});
				// Create an instance of the Track widget
				// and add it to the view's UI
				var track = new Track({
					view: view
				});
				view.ui.add(track, "top-left");

				var searchWidget = new Search({
					view: view
				});
				// Adds the search widget below other elements in
				// the top left corner of the view
				view.ui.add(searchWidget, {
					position: "top-left",
					index: 2
				});

				// The sample will start tracking your location
				// once the view becomes ready
				view.then(function () {
					track.start();
				});

				
				

				function alert(evt) {
					// var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
					// console.log(mp);
					
					console.log(evt);

				}


				// this.mapView = new MapView(view);
			});
		});
	}
}

