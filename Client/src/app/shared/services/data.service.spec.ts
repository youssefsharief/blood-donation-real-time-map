import { async, getTestBed, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { getResponse, setupConnections, setupConnectionsWithError } from '../../shared/spec-helpers/helper';
import { Response, ResponseOptions, ResponseType, Request } from '@angular/http';
import { MockConnection } from '@angular/http/testing';
import { fakeDonors } from '../models/donors.model';
import { DataService } from './data.service';

describe('Service: DataService', () => {
    let backend: MockBackend;
    let service: DataService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                DataService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                },
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                },
            ]
        });
        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(DataService);
    });


    fit('GET ITEMS: success', (done) => {
        setupConnections(backend, {
            body: { data: fakeDonors },
            status: 200
        });
        service.getFromBackend(45,45).subscribe((items) => {
            expect(items.length).toBeTruthy();
            done()
        });
    });

    fit('GET ITEMS: error', (done) => {
        setupConnectionsWithError(backend);
        service.getFromBackend(45,45).subscribe(
            payload => {},
            error => {
                expect(error).toBeTruthy()
                done()
            });
    });

    fit('PUT ITEM: success', (done) => {
        setupConnections(backend, {
            body: { data: fakeDonors[1] },
            status: 200
        });
        service.update(fakeDonors[1]).subscribe(
            payload => {
                expect(payload._id).toBeTruthy()
                done()
            }
        );
    });

    fit('PUT ITEM: error', (done) => {
        setupConnectionsWithError(backend);
        service.update(fakeDonors[1]).subscribe(
            payload => {
            },
            error => {
                expect(error).toBeTruthy()
                done()
            });
    });

    fit('DELETE ITEM: success', (done) => {
        setupConnections(backend, {
            body: { data: "OK" },
            status: 200
        });
        service.delete(fakeDonors[0]).subscribe(
            payload => {
                expect(payload).toBeTruthy()
                done()
            }
        );
    });

    fit('DELETE ITEM: error', (done) => {
        setupConnectionsWithError(backend);
        service.delete(fakeDonors[0]).subscribe(
            payload => {
            },
            error => {
                expect(error).toBeTruthy()
                done()
            });
    });

    fit('Add ITEM: success', (done) => {
        setupConnections(backend, {
            body: { data: "OK" },
            status: 200
        });
        service.add(fakeDonors[0]).subscribe(
            payload => {
                expect(payload).toBeTruthy()
                done()
            }
        );
    });

    fit('Add ITEM: error', (done) => {
        setupConnectionsWithError(backend);
        service.add(fakeDonors[0]).subscribe(
            payload => {
            },
            error => {
                expect(error).toBeTruthy()
                done()
            });
    });



});