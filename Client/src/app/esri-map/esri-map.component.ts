import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, Input } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import { modules, addUI, assignMapClickWatcher } from './esri-helper';
import { DataService } from '../shared/services/data.service';
import { GraphicsService } from './GraphicsService';

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
		private esriLoader: EsriLoaderService, private dataService: DataService, private graphicsService: GraphicsService
	) { }

	
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
					zoom: 10
				});


				self.graphicsService.setGraphics(view, SimpleMarkerSymbol, Point, Graphic) 
				
				
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


				if (self.type == "donors") {
					assignMapClickWatcher(view, locatorTask, self)
				}


				view.then(function () {
					track.start();
				});
			});
		});
	}
}

