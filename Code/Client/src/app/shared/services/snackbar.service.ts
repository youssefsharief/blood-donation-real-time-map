import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
    providedIn: 'root',
})
export class SnackBarService {
    private readonly actionText = 'Ok';
    private readonly successDefaultMessage = 'Successful operation';
    private readonly successConfig = { panelClass: ['successAlert'], duration: 5000 };
    private readonly errorDefaultMessage = 'Sorry, an error ocurred';
    private readonly errorConfig: MatSnackBarConfig = { panelClass: ['errorAlert'], duration: 5000 };
    private readonly warnConfig: MatSnackBarConfig = { panelClass: ['warnAlert'], duration: 5000 };

    constructor(public snackBar: MatSnackBar) {}

    emitSuccessSnackBar(message = this.successDefaultMessage, actionText = this.actionText, config = this.successConfig) {
        this.snackBar.open(message, actionText, config);
    }

    emitErrorSnackBar(message = this.errorDefaultMessage, actionText = this.actionText, config = this.errorConfig) {
        this.snackBar.open(message, actionText, config);
    }

    emitWarnSnackBar(message = this.errorDefaultMessage, actionText = this.actionText, config = this.warnConfig) {
        this.snackBar.open(message, actionText, config);
    }
}
