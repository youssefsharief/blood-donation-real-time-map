import { Component, Output, EventEmitter } from '@angular/core';
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
    constructor(private fb: FormBuilder){}

    ngOnInit() {
        this.buildForm()
    }


    buildForm() {
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
