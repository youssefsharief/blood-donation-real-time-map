import { SnackBarService } from '../shared/services/snackbar.service';
import { SharedModule } from '../shared/shared.module';
import { PostingComponent } from './posting.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostingModule } from './posting.module';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../shared/services/info.service';
import { DataService } from '../shared/services/data.service';

export const fakeDonors = [
    {
        _id: '59a940edbfb2961a5c82263c',
        firstName: 'Arvilla',
        lastName: 'Jacobi',
        email: 'Antoinette78@yahoo.com',
        telephone: '362-936-7361 x9143',
        bloodGroup: 'O',
        location:
        {
            type: 'Point',
            _id: '59a940edbfb2961a5c82263d',
            coordinates: [140.3284, -8.2974]
        },
        ip: '199.70.222.102',
        __v: 0
    },

    {
        _id: '59a94219be9707282cb9fd2e',
        firstName: 'Devon',
        lastName: 'King',
        email: 'Cleora.Keebler@hotmail.com',
        telephone: '833-236-9831 x570',
        bloodGroup: 'O',
        location:
        {
            type: 'Point',
            _id: '59a94219be9707282cb9fd2f',
            coordinates: [111.785, -0.3458]
        },
        ip: '243.48.84.158',
        __v: 0
    },

    {
        _id: '59a940ea01d0ad21ccc7d440',
        firstName: 'Chadrick',
        lastName: 'Gutmann',
        email: 'Desiree_Aufderhar59@hotmail.com',
        telephone: '(017) 442-4699 x946',
        bloodGroup: 'O',
        location:
        {
            type: 'Point',
            _id: '59a940ea01d0ad21ccc7d441',
            coordinates: [84.6453, -40.1547]
        },
        ip: '108.178.126.215',
        __v: 0
    },

    {
        _id: '59a942455a5cb02048b8d8fa',
        firstName: 'Ola',
        lastName: 'Murazik',
        email: 'Chaya.Lubowitz@yahoo.com',
        telephone: '1-366-170-1541',
        bloodGroup: 'O',
        location:
        {
            type: 'Point',
            _id: '59a942455a5cb02048b8d8fb',
            coordinates: [111.8305, -29.6411]
        },
        ip: '91.49.201.28',
        __v: 0
    }
]
describe('Posting Component', () => {

    let comp: PostingComponent;
    let fixture: ComponentFixture<PostingComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let sb
    let infoService
    let ActivatedRouteStub = {
        params: Observable.of('45456'),
        snapshot:{
            url:[{path:'123'}]
        }
    }
    let infoServiceStub = {
        userId:123
    }
    let dataServiceStub = {
        getDonorInfo(id){
            return Observable.of(fakeDonors[0])
        }
    }
    let dataService
    


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, PostingModule, SharedModule],
            declarations: [],
            providers: [
                {provide: ActivatedRoute, useValue: ActivatedRouteStub},
                {provide: InfoService, useValue: infoServiceStub} ,
                DataService,
                // {provide: DataService, useValue: dataServiceStub} ,
                {provide: ActivatedRoute, useValue: ActivatedRouteStub},
                { provide: SnackBarService, useValue: {} },
            
            ],
        });
        fixture = TestBed.createComponent(PostingComponent);
        comp = fixture.componentInstance;

        dataService = fixture.debugElement.injector.get(DataService);
        infoService = fixture.debugElement.injector.get(InfoService);
        sb = fixture.debugElement.injector.get(SnackBarService);
    });


    fit("should load", () => {
        expect(comp).toBeTruthy()
    })

    fit("should save id from path to info infoService", () => {
        expect(infoService.userId).toEqual(123)
    })

    // fit("should save data to info infoService", () => {
    //     dataService.getDonorInfo = (id) => {
    //         return Observable.of(fakeDonors[0])
    //     }
    //     expect(infoService.data).toBeTruthy()
    // })
   
    
    fit("should respond to error from data service", () => {
        dataService.getDonorInfo = (id) => {
                return Observable.throw('Error')
            }
        expect(comp).toBeTruthy()
    })
 


})
