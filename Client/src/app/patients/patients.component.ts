import { Component, ViewChild, ElementRef } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import { DataService } from '../shared/services/data.service';
import { modules } from './patients-esri-helper';

@Component({
    selector: 'patients',
    templateUrl: 'patients.component.html',
    styleUrls: ['patients.component.scss']
})
export class PatientsComponent {
    donors
    @ViewChild('patientsMap') private mapViewEl: ElementRef;

    constructor(private esriLoader: EsriLoaderService, private dataService:DataService) { }
    public ngOnInit() {
        this.loadMap([45, 45], 'topo', 12)
    }

    private getDonors(longitude, latitude){
        this.dataService.getFromBackend(longitude, latitude).subscribe(
            data=>this.donors = data,
            error=> console.log(error)            
        )
    }


    loadMap(center = [45, 45], basemap = 'topo', zoom = 10, container = this.mapViewEl.nativeElement) {
        const self = this
        return this.esriLoader.load({
            url: 'https://js.arcgis.com/4.3/'
        }).then(() => {
            this.esriLoader.loadModules(modules).then(([
                map,
                MapView,
                // Track,
                // Search,
                // webMercatorUtils
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

                // var track = new Track({
                //     view: view
                // });


                // var searchWidget = new Search({
                //     view: view
                // });

                // addUI(view, track, searchWidget)
                // view.on("click", function (evt) {
                //     self.getDonors(evt.mapPoint.longitude, evt.mapPoint.latitude)
                // })

                // view.then(function () {
                //     track.start();
                // });
            });
        });
    }
}
