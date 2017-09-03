import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { InfoService } from '../shared/services/info.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { globalValidators } from '../shared/global-validators';
import { SnackBarService } from '../shared/services/snackbar.service';

@Component({
    selector: 'posting',
    templateUrl: 'posting.component.html',
})
export class PostingComponent {
    isEdit: boolean
    form: FormGroup
    bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    @Output() submitted = new EventEmitter();

    constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute,
        private dataService: DataService, private router: Router, private infoService: InfoService,
        private sb: SnackBarService) { 
            this.grabIdAndGetInfo()
        }

    grabIdAndGetInfo(){
        if(this.activatedRoute.snapshot.url[0]){
            this.isEdit =true
            this.getDonorInfo(this.activatedRoute.snapshot.url[0].path)
        }
        else if(this.infoService.id){
            this.isEdit =true
            this.buildForm()
        } else {
            this.isEdit =false
            this.buildForm()
        }
        
        
    
    }
  
    private getDonorInfo(id) {
        this.dataService.getDonorInfo(id).subscribe(
            data => {
                this.infoService.id = id
                this.infoService.data = data
                this.buildForm()
            },
            error => {
                this.sb.emitErrorSnackBar("This account is currently non-existant")
                this.router.navigate(['/map'])
            }
        )
    }

    onRemove(){
        return this.dataService.delete(this.infoService.id).subscribe(
            data => {
                this.infoService.clearData()
                this.form.reset()
                this.sb.emitSuccessSnackBar("You have successfully deleted your info")
            },
            error => console.log(error)
        )
    }
    onSubmit(formData) {
        if (this.infoService.id) return this.dataService.update(this.infoService.id, formData).subscribe(
            success => {
                this.router.navigate(['/success'])
            },
            error => console.log(error)
        )
        else return this.dataService.add(formData).subscribe(
            data => {
                this.infoService.id = data._id
                this.router.navigate(['/success'])
            },
            error => console.log(error)
        )
    }


    onChangeLocationRequest() {
        this.router.navigate(['/map'])
    }


    buildForm() {

        if (this.infoService.data){
            this.form = this.fb.group({
                firstName: [this.infoService.data.firstName || '', Validators.required],
                lastName: [this.infoService.data.lastName || '', Validators.required],
                email: [this.infoService.data.email || '', globalValidators.mailFormat],
                telephone: [this.infoService.data.telephone || '', globalValidators.telephoneFormat],
                bloodGroup: [this.infoService.data.bloodGroup || '', Validators.required],
                longitude: [this.infoService.data.longitude || '', Validators.required],
                latitude: [this.infoService.data.latitude || '', Validators.required],
                address: [this.infoService.data.address || '',Validators.required],
            })
        }
        else {  
            this.form = this.fb.group({
                firstName: [  '', Validators.required],
                lastName: [ '', Validators.required],
                email: ['', globalValidators.mailFormat],
                telephone: [  '', globalValidators.telephoneFormat],
                bloodGroup: ['', Validators.required],
                longitude: [  '', Validators.required],
                latitude: [ '', Validators.required],
                address: ['',Validators.required],
            })

        }
        
    }


    isIncorrectMailFormat(control) {
        return this.form.get(control).hasError('incorrectMailFormat')
    }
    isIncorrectTelephoneFormat(control) {
        return this.form.get(control).hasError('incorrectTelephoneFormat')
    }




}
