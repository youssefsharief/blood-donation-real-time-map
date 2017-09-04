
export const globalValidators = {
    mailFormat(control): ValidationResult {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value && control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    },

    telephoneFormat(control): ValidationResult {
        var PHONE_REGEXP = /(00|\+)\d{12}$/i;
        if (control.value && control.value != "" && (control.value.length <= 5 || !PHONE_REGEXP.test(control.value))) {
            return { "incorrectTelephoneFormat": true };
        }
        return null;
    }
}

interface ValidationResult {
    [key: string]: boolean;
}

