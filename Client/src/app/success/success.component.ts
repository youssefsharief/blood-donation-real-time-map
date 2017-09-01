import { InfoService } from '../shared/services/info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'success',
    templateUrl: 'success.component.html',
})
export class SuccessComponent {
    id
    constructor(private route: ActivatedRoute, private infoService: InfoService, private router: Router) {}
    ngOnInit(){
        this.id= this.infoService.id
        if(!this.id) this.router.navigate(['/donors'])
    }


}
