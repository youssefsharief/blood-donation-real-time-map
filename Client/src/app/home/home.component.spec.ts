import { HomeComponent } from './home.component';
import { accessSync } from 'fs';
import { SharedModule } from '../shared/shared.module';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { HomeModule } from './home.module';


describe('Success Component', () => {

    let comp: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let de: DebugElement;
    let el: HTMLElement;

 
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HomeModule, SharedModule],
            declarations: [],
            providers: [
                         ],
        });
        fixture = TestBed.createComponent(HomeComponent);
        comp = fixture.componentInstance;
    });


    fit("should load", () => {
        expect(comp).toBeTruthy()
    })

    fit("should get Params", () => {
    })



})
