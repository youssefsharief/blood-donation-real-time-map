import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'add-modal',
    templateUrl: 'add-modal.component.html',
})
export class AddModalComponent {
    @ViewChild('modal') private modal: ModalDirective
    @Output() submitted = new EventEmitter();
    constructor(){}

    

    show() {
        this.modal.show();
    }
    hide() {
        this.modal.hide();
    }

   
    

    onSubmit(c){
        this.submitted.emit(c)
    }
}