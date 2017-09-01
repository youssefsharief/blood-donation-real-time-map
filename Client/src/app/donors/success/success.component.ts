import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { InfoService } from '../../shared/services/info.service';

@Component({
    selector: 'success',
    templateUrl: 'success.component.html',
})
export class SuccessComponent {
    constructor(private infoService: InfoService, private router: Router) {
        console.log(this.infoService.id);
        
        if(!this.infoService.id) this.router.navigate(['/donors'])
    }
    ngOnInit(){
        
    }


}
