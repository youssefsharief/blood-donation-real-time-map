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
    @ViewChild('patientsMap') private mapViewEl: ElementRef;

    constructor(private esriLoader: EsriLoaderService, private dataService:DataService) { }
    public ngOnInit() {
        
    }

}