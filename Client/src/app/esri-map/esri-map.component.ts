import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, Input } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import { modules, addUI, assignMapClickWatcher } from './esri-helper';
import { DataService } from '../shared/services/data.service';
import { GraphicsService } from './GraphicsService';
import { showHiddenItems, debounce } from './utility';
import { center } from './esri.config';

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
		private esriLoader: EsriLoaderService, private dataService: DataService,
		private graphicsService: GraphicsService,
	) {

	}


	ngOnInit() {
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
				Locator,
				Graphic,
				Point,
				SimpleMarkerSymbol
			]) => {
				let featureLayer
				var map = new Map({
					basemap: "streets-navigation-vector"
				});


				const view = new MapView({
					container: this.mapViewEl.nativeElement,
					map,
					center: center,
					zoom: 10,
				});


				// When data arrives from backen render the graphics
				this.dataService.dataBS.subscribe(
					data => this.graphicsService.setGraphicsFromData(view, SimpleMarkerSymbol, Point, Graphic, data),
					error => console.log('Problem with socket connector')
				)

				// Set up a locator task using the world geocoding service
				var locatorTask = new Locator({
					url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
				});

				const getData = () => self.dataService.getData(view.center.longitude, view.center.latitude)
				const track = new Track({
					view: view
				});


				const searchWidget = new Search({
					view: view
				});




				addUI(view, track, searchWidget)
				view.on("drag", debounce(getData, 25))
				view.on("mouse-wheel", debounce(getData, 25))
				view.on("hold", debounce(getData, 25))

				view.on("double-click", function (event) {
					event.stopPropagation();
					const longitude = event.mapPoint.longitude
					const latitude = event.mapPoint.latitude
					let address = ''
					// Execute a reverse geocode using the clicked location
					locatorTask.locationToAddress(event.mapPoint).then(response => {
						// If an address is successfully found, show it in the popup's content
						address = response.address
						self.graphicsService.showAddingPopup(view, event.mapPoint, address)
						
					}).otherwise(function (err) {
						// If the promise fails and no result is found, show a generic message
						self.graphicsService.showAddingPopup(view, event.mapPoint)
					});
					
					view.popup.on("trigger-action", (event) => {
						if (event.action.id === "show-add-modal") {
							self.clicked.emit({longitude, latitude, address})
						}
					});
					
				});


				view.popup.on("trigger-action", (event) => {
					if (event.action.id === "show-hidden") {
						showHiddenItems(view)
					}
				});


				view.then(function (x) {
					getData()
				});
			});
		});
	}
}



