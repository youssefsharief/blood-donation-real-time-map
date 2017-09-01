import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'success',
    templateUrl: 'success.component.html',
})
export class SuccessComponent {
    id
    constructor(private route: ActivatedRoute) {}
    ngOnInit(){
        this.route.params.subscribe(
            params => {
                console.log(params);
                
                this.id = params
            }
        
        )
    }


}
