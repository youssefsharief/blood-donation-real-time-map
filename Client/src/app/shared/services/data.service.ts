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
    private dataStore: any[]
    dataBS: Subject<any>

    url = 'http://localhost:3000/donors'
    items


    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {
        this.dataBS = new Subject()
    }

    instantiate() {
        this.socket = io('http://localhost:3000');

        this.socket.on("new data", payload => {
            this.dataStore = payload
            this.dataBS.next(this.dataStore)
        })

        this.socket.on("updated", payload => {
            this.getData()
        })

        

    }
    getData(longitude?, latitude?) {
        this.socket.emit('needs data', {longitude, latitude})
    }
  
    
    isConnected(){
        return this.socket.connected
    }


    delete(id) {
        return this.http.delete(`${this.url}/${id}`)
            .map(res => {
                 return "OK"
            })
            .catch(this.handleError);
    }


    update(id, data) {
        data._id = id       
        return this.http.put(`${this.url}`, data, this.options)
            .map(res => {                
                return res.json()
            })
            .catch(this.handleError);
    }

   

    add(item) {
        return this.http.post(this.url, item, this.options)
            .map(res => {
                return res.json()
            })
            .catch(this.handleError);
    }

    getDonorInfo(id) {
        return this.http.get(`${this.url}/${id}`)
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


