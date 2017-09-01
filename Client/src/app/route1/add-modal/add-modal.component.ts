import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { globalValidators } from '../../shared/global-validators';
import { DataService } from '../../shared/services/data.service';

@Component({
    selector: 'add-modal',
    templateUrl: 'add-modal.component.html',
})
export class AddModalComponent {
    location
    form: FormGroup
    bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    @ViewChild('modal') private modal: ModalDirective
    @Output() submitted = new EventEmitter();
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

    onSubmit(c){
        console.log(c);
        this.submitted.emit(c)
    }
}