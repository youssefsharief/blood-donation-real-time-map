import { SharedModule } from '../shared/shared.module';
import { SuccessComponent } from './success.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessModule } from './success.module';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../shared/services/info.service';


describe('Success Component', () => {

    let comp: SuccessComponent;
    let fixture: ComponentFixture<SuccessComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let infoService
    let ActivatedRouteStub = {
        params: Observable.of('45456')
    }
    let infoServiceStub = {
        userId:123
    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SuccessModule, SharedModule],
            declarations: [],
            providers: [
                {provide: ActivatedRoute, useValue: ActivatedRouteStub},
                {provide: InfoService, useValue: infoServiceStub} ,
            
            ],
        });
        fixture = TestBed.createComponent(SuccessComponent);
        comp = fixture.componentInstance;

        infoService = fixture.debugElement.injector.get(InfoService);
        // sb = fixture.debugElement.injector.get(SnackBarConfig);
    });


    it("should load", () => {
        expect(comp).toBeTruthy()
    })

    it("should save id if id is available in info service", () => {
        comp.ngOnInit()
        expect(comp.id).toBeTruthy()
    })

    it("should navigate if id is not available", () => {
        infoService.userId = null
        comp.ngOnInit()
        expect(comp.id).toBeFalsy()
    })
 


})
