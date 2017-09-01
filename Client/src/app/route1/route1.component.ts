import { Router } from '@angular/router';
import { SnackBarService } from '../shared/services/snackbar.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import { AppSocketIoService } from '../shared/services/socket';
import { AddModalComponent } from './add-modal/add-modal.component'
import { DataService } from '../shared/services/data.service';
@Component({
    selector: 'route1',
    templateUrl: 'route1.component.html',
    styleUrls: ['route1.component.css']
})
export class Route1Component {
    @ViewChild(AddModalComponent) private addModalComponent: AddModalComponent
    map: any;
    location: number[]
    connection
    constructor(private appSocketIoService: AppSocketIoService, 
        private dataService: DataService, private snackbar: SnackBarService,
        private router: Router
    ) {

    }

    onMapClick(data) {
        console.log('rrrrrrrrrrr', data);
        this.captureLocation(data)
        this.addModalComponent.show()
    }
    captureLocation(data){
        this.location.push(data.longitude)
        this.location.push(data.latitude)
    }
    onSubmit(data) {
        console.log('recieved', data);
        const {firstName, lastName, email, telephone, bloodGroup}  = data
        this.dataService.add({firstName, lastName, email, telephone, bloodGroup, location:this.location}).subscribe(
            data=>{
                this.router.navigate(['/success', data._id])
                this.snackbar.emitSuccessSnackBar('You have successfully added your info as a donor')
                
            },
            error=>this.snackbar.emitErrorSnackBar('Error!')        
        )
    }
    ngOnDestroy() {
        this.connection.unsubscribe();
    }
}
