import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, Input } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import { modules, addUI } from './esri-helper';

@Component({
	selector: 'esri-map',
	templateUrl: './esri-map.component.html',
	styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {
	public mapView: any;
	@Input() type: string
	@ViewChild('mapViewNode') private mapViewEl: ElementRef;
	@Output() clicked = new EventEmitter();

	constructor(
		private esriLoader: EsriLoaderService
	) { }

	public ngOnInit() {
		this.loadMap()
	}

	loadMap() {
		const self = this
		return this.esriLoader.load({
			url: 'https://js.arcgis.com/4.4/'
		}).then(() => {
			this.esriLoader.loadModules(modules).then(([
				Map,
				MapView,
				Track,
				Search,
				webMercatorUtils,
				FeatureLayer,
				Locator
			]) => {
				let featureLayer
				var map = new Map({
					basemap: "streets-navigation-vector"
				});


				const view = new MapView({
					container: this.mapViewEl.nativeElement,
					map,
					zoom: 10
				});

				// Set up a locator task using the world geocoding service
				var locatorTask = new Locator({
					url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
				});


				const track = new Track({
					view: view
				});


				const searchWidget = new Search({
					view: view
				});

				addUI(view, track, searchWidget)
				view.on("click", function (event) {
					event.stopPropagation(); // overwrite default click-for-popup behavior

					// Get the coordinates of the click on the view
					var lat = Math.round(event.mapPoint.latitude * 1000) / 1000;
					var lon = Math.round(event.mapPoint.longitude * 1000) / 1000;

					view.popup.open({
						// Set the popup's title to the coordinates of the location
						title: "Reverse geocode: [" + lon + ", " + lat + "]",
						location: event.mapPoint // Set the location of the popup to the clicked location
					});

					// Display the popup
					// Execute a reverse geocode using the clicked location
					locatorTask.locationToAddress(event.mapPoint).then(function (
						response) {
							console.log(view.popup);
							
						// If an address is successfully found, show it in the popup's content
						view.popup.content = response.address;
						console.log(response);
						
					}).otherwise(function (err) {
						// If the promise fails and no result is found, show a generic message
						view.popup.content =
							"No address was found for this location";
					});
					self.clicked.emit(event.mapPoint)
				});

				view.then(function () {
					track.start();
				});
			});
		});
	}
}


