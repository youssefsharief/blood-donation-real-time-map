import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {
    data
    id
    constructor() {
    }

    setLocation(longitude, latitude, address) {
        if (!this.data) {
            this.data = {}
        }
        this.data.longitude = longitude
        this.data.latitude = latitude
        this.data.address = address

    }


    clearData(){
        this.data = null
        this.id=null
    }

}

