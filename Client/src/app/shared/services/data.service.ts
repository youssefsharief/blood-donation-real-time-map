import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    url = 'http://localhost:3000/donors'
    items


    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {
    
    }

    getFromBackend(long, lat) {
        return this.http.get(`${this.url}/?long=${long}&lat=${lat}&distance=50000000`)
            .map(res => {
                this.items = res.json().data
                return this.items || {};
            })
            .catch(this.handleError);
    }


    delete(toBedDeleted) {
        return this.http.delete(`${this.url}/${toBedDeleted.id}`)
            .map(res => {
                 return "OK"
            })
            .catch(this.handleError);
    }


    update(data) {
        return this.http.put(`${this.url}`, data, this.options)
            .map(res => {
                return res.json().data
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
                return res.json()
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

