import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { InfoService } from '../shared/services/info.service';

@Component({
    selector: 'posting',
    templateUrl: 'posting.component.html',
})
export class PostingComponent {
    id
    data
    constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router, private infoService: InfoService) { }
    ngOnInit() {
        this.grabIdAndGetInfo()
    }

    private grabIdAndGetInfo() {
        this.route.params.subscribe(
            params => {
                this.id = params.id
                this.getDonorInfo(this.id)
            })
    }

    private getDonorInfo(id) {
        this.dataService.getDonorInfo(id).subscribe(
            data => {
                this.data = data
            },
            error => console.log(error)
        )
    }

    onSubmit(formData) {
        const toSend = formData
        this.dataService.update(this.id, formData).subscribe(
            success => {
                this.infoService.id=this.id
                this.router.navigate(['/success'])
            },
            error => console.log(error)
        )
    }


    onChangeLocationRequest() {
        this.infoService.data = this.data
        this.infoService.id = this.id
        this.router.navigate(['/donors'])
    }

}
