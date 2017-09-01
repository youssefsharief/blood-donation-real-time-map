import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { globalValidators } from '../../shared/global-validators';

@Component({
    selector: 'add-modal',
    templateUrl: 'add-modal.component.html',
})
export class AddModalComponent {
    form: FormGroup
    bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    @ViewChild('modal') private modal: ModalDirective
    constructor(private fb: FormBuilder){}

    ngOnInit() {
        this.buildForm()
    }

    show() {
        this.modal.show();
    }
    hide() {
        this.modal.hide();
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
}