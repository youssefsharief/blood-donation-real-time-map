import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import * as io from 'socket.io-client';
import { SnackBarService } from './snackbar.service';
import { Subject } from "rxjs/Subject";
import 'rxjs/Rx'
@Injectable()
export class DataService {
    private socket: SocketIOClient.Socket;
    private nearbyDonorsStore: any[]
    nearbyDonorsSubscription: Subject<any>

    private apiUrl = 'http://localhost:3000/donors'
    private requestHeaders = new Headers({ 'Content-Type': 'application/json' });
    private requestOptions = new RequestOptions({ headers: this.requestHeaders });

    constructor(private http: Http) {
        this.nearbyDonorsSubscription = new Subject()
    }

    instantiateSocket() {
        this.socket = io('http://localhost:3000');

        this.socket.on("new data", payload => {
            this.nearbyDonorsStore = payload
            this.nearbyDonorsSubscription.next(this.nearbyDonorsStore)
        })

        this.socket.on("updated", payload => {
            this.getNearbyDonors()
        })
    }

    getNearbyDonors(longitude?, latitude?) {
        this.socket.emit('needs data', {longitude, latitude})
    }
  
    
    isConnected(){
        return this.socket.connected
    }


    deleteDonor(id) {
        return this.http.delete(`${this.apiUrl}/${id}`)
            .map(res => {
                 return "OK"
            })
            .catch(this.handleError);
    }


    updateDonor(id, data) {
        data._id = id       
        return this.http.put(`${this.apiUrl}`, data, this.requestOptions)
            .map(res => {                
                return res.json()
            })
            .catch(this.handleError);
    }

   

    addDonor(item) {
        return this.http.post(this.apiUrl, item, this.requestOptions)
            .map(res => {
                return res.json()
            })
            .catch(this.handleError);
    }

    getDonorInfo(id) {
        return this.http.get(`${this.apiUrl}/${id}`)
            .map(res => {
                const item= res.json()
                item.longitude = item.location.coordinates[0]
                item.latitude = item.location.coordinates[1]
                return item
            })
            .catch(this.handleError);
    }


    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    

}


