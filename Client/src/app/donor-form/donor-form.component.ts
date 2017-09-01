import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { globalValidators } from '../shared/global-validators';

@Component({
    selector: 'donor-form',
    templateUrl: 'donor-form.component.html',
    styleUrls: ['donor-form.component.scss']
})
export class DonorFormComponent {
    form: FormGroup
    bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    @Output() submitted = new EventEmitter();
    @Input() item
    constructor(private fb: FormBuilder){}

    ngOnInit() {
        this.buildForm()
    }


    buildForm() {
        if (this.item){
            this.form = this.fb.group ({
                firstName: [this.item.firstName || '', Validators.required],
                lastName: [this.item.lastName || '', Validators.required],
                email: [this.item.email || '',  globalValidators.mailFormat],
                telephone: [this.item.telephone || '', globalValidators.telephoneFormat],
                bloodGroup: [this.item.bloodGroup || '', Validators.required],
            })
        }
        
        else
        this.form = this.fb.group ({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['',  globalValidators.mailFormat],
            telephone: ['', globalValidators.telephoneFormat],
            bloodGroup: ['', Validators.required],
        })
    }

    isIncorrectMailFormat(control){
        return this.form.get(control).hasError('incorrectMailFormat')
    }
    isIncorrectTelephoneFormat(control){
        return this.form.get(control).hasError('incorrectTelephoneFormat')
    }

    onSubmit(c){
        this.submitted.emit(c)
    }

}
