import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services/data.service';

@Component({
    selector: 'posting',
    templateUrl: 'posting.component.html',
})
export class PostingComponent {
    id
    data
    constructor(private route: ActivatedRoute, private dataService: DataService) {}
    ngOnInit(){
        this.grabIdAndGetInfo()
    }
    
    private grabIdAndGetInfo(){
        this.route.params.subscribe(
            params => {
                this.getDonorInfo(params.id)
            })
    }

    private getDonorInfo(id){
        this.dataService.getDonorInfo(id).subscribe(
            data=> this.data = data,
            error=> console.log(error)            
        )
    }
}
