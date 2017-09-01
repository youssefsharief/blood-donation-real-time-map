import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'add-modal',
    templateUrl: 'add-modal.component.html',
})
export class AddModalComponent {
    @ViewChild('modal') private modal: ModalDirective

    show() {
        this.modal.show();
    }
    hide() {
        this.modal.hide();
    }


    
}