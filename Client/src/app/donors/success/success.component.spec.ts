import { accessSync } from 'fs';
import { SuccessComponent } from './success.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';


describe('Success Component', () => {

    let comp: SuccessComponent;
    let fixture: ComponentFixture<SuccessComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    let ActivatedRouteStub = {
        params: Observable.of('45456')
    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [],
            providers: [
                {provide: ActivatedRoute, useValue: ActivatedRouteStub}            ],
        });
        fixture = TestBed.createComponent(SuccessComponent);
        comp = fixture.componentInstance;
        // _service = fixture.debugElement.injector.get(ProductAddOnsService);
        // sb = fixture.debugElement.injector.get(SnackBarConfig);
    });


    fit("should load", () => {
        expect(comp).toBeTruthy()
    })

    fit("should get Params", () => {
        comp.ngOnInit()
        // expect(comp.id).toBeTruthy()
    })



})
