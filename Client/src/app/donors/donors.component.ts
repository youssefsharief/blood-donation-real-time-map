import { Router } from '@angular/router';
import { SnackBarService } from '../shared/services/snackbar.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import { AppSocketIoService } from '../shared/services/socket';
import { AddModalComponent } from './add-modal/add-modal.component'
import { DataService } from '../shared/services/data.service';
import { InfoService } from '../shared/services/info.service';
@Component({
    selector: 'Donors',
    templateUrl: 'Donors.component.html',
})
export class DonorsComponent {
    @ViewChild(AddModalComponent) private addModalComponent: AddModalComponent
    map: any;
    location: number[]=[]
    constructor(private appSocketIoService: AppSocketIoService, 
        private dataService: DataService, private snackbar: SnackBarService,
        private router: Router, private infoService: InfoService
    ) { }

   


    onMapClick(data) {
        this.captureLocation(data)
    }
    showModal(){
        this.addModalComponent.show()
    }
    captureLocation(data){
        this.location.push(data.longitude)
        this.location.push(data.latitude)
    }
    onSubmit(data) {
        const {firstName, lastName, email, telephone, bloodGroup}  = data
        this.dataService.add({firstName, lastName, email, telephone, bloodGroup, location:this.location}).subscribe(
            data=>{

                this.infoService.id= data._id
                this.router.navigate(['/success'])
                this.snackbar.emitSuccessSnackBar('You have successfully added your info as a donor')
            },
            error=>this.snackbar.emitErrorSnackBar('Error!')        
        )
    }

}
