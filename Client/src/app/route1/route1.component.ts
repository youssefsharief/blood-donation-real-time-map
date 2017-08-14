import { Component, ElementRef, ViewChild } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';

@Component({
    selector: 'route1',
    templateUrl: 'route1.component.html',
    styleUrls: ['route1.component.css']
})
export class Route1Component {
    @ViewChild('mapViewNode') mapEl: ElementRef;

    map: any;

    constructor(private esriLoader: EsriLoaderService) { }
    ngOnInit() {
        // only load the ArcGIS API for JavaScript when this component is loaded
        return this.esriLoader.load({
            // use a specific version of the API instead of the latest
            url: '//js.arcgis.com/3.18/'
        }).then(() => {
            // load the map class needed to create a new map
            this.esriLoader.loadModules(['esri/map']).then(([map]) => {
                // create the map at the DOM element in this component
                this.map = new map(this.mapEl.nativeElement, {
                    center: [-118, 34.5],
                    zoom: 8,
                    basemap: 'dark-gray'
                });
            });
        });
    }
}
