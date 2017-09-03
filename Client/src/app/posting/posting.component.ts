import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { InfoService } from '../shared/services/info.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { globalValidators } from '../shared/global-validators';

@Component({
    selector: 'posting',
    templateUrl: 'posting.component.html',
})
export class PostingComponent {
    id
    data
    form: FormGroup
    bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    @Output() submitted = new EventEmitter();

    constructor(private fb: FormBuilder, private route: ActivatedRoute,
        private dataService: DataService, private router: Router, private infoService: InfoService) { }

    ngOnInit() {
        this.grabIdAndGetInfo()
    }

    private grabIdAndGetInfo() {
        this.route.params.subscribe(
            params => {
                if (params.id == 'none') {
                    this.id = null
                    this.data = this.infoService.data
                    if(!this.data) this.router.navigate(['/donors'])
                    else this.buildForm()
                    
                }
                else this.id = params.id
                if (this.id) this.getDonorInfo(this.id)
            })
    }

    private getDonorInfo(id) {
        this.dataService.getDonorInfo(id).subscribe(
            data => {
                this.data = data
                this.infoService.data = data
                this.buildForm()
            },
            error => console.log(error)
        )
    }

    onRemove(){
        
    }
    onSubmit(formData) {
        const toSend = formData
        console.log(formData);
        
        if (this.id) return this.dataService.update(this.id, formData).subscribe(
            success => {
                this.infoService.id = this.id
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
        this.infoService.data = this.data
        this.infoService.id = this.id
        this.router.navigate(['/donors'])
    }


    reset() {
        this.form.reset()
    }

    buildForm() {
        this.form = this.fb.group({
            firstName: [this.data.firstName || '', Validators.required],
            lastName: [this.data.lastName || '', Validators.required],
            email: [this.data.email || '', globalValidators.mailFormat],
            telephone: [this.data.telephone || '', globalValidators.telephoneFormat],
            bloodGroup: [this.data.bloodGroup || '', Validators.required],
            longitude: [this.data.longitude || '', Validators.required],
            latitude: [this.data.latitude || '', Validators.required],
            address: [this.data.address || '',],

        })
    }


    isIncorrectMailFormat(control) {
        return this.form.get(control).hasError('incorrectMailFormat')
    }
    isIncorrectTelephoneFormat(control) {
        return this.form.get(control).hasError('incorrectTelephoneFormat')
    }




}
