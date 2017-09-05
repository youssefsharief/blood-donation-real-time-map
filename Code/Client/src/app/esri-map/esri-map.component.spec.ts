// import { EsriLoaderService } from 'angular-esri-loader';
// import { GraphicsService } from '../shared/services/graphics.service';
// import { SnackBarService } from '../shared/services/snackbar.service';
// import { SharedModule } from '../shared/shared.module';
// import { EsriMapComponent } from './esri-map.component';
// import { DebugElement } from '@angular/core';
// import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Observable } from 'rxjs/Observable';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { EsriMapModule } from './esri-map.module';
// import { ActivatedRoute } from '@angular/router';
// import { InfoService } from '../shared/services/info.service';
// import { DataService } from '../shared/services/data.service';
// import 'rxjs/add/observable/of';
// // import 'rxjs/add/observable/throw'
// export const fakeDonors = [
//     {
//         _id: '59a940edbfb2961a5c82263c',
//         firstName: 'Arvilla',
//         lastName: 'Jacobi',
//         email: 'Antoinette78@yahoo.com',
//         telephone: '362-936-7361 x9143',
//         bloodGroup: 'O',
//         location:
//         {
//             type: 'Point',
//             _id: '59a940edbfb2961a5c82263d',
//             coordinates: [140.3284, -8.2974]
//         },
//         ip: '199.70.222.102',
//         __v: 0
//     },

//     {
//         _id: '59a94219be9707282cb9fd2e',
//         firstName: 'Devon',
//         lastName: 'King',
//         email: 'Cleora.Keebler@hotmail.com',
//         telephone: '833-236-9831 x570',
//         bloodGroup: 'O',
//         location:
//         {
//             type: 'Point',
//             _id: '59a94219be9707282cb9fd2f',
//             coordinates: [111.785, -0.3458]
//         },
//         ip: '243.48.84.158',
//         __v: 0
//     },

//     {
//         _id: '59a940ea01d0ad21ccc7d440',
//         firstName: 'Chadrick',
//         lastName: 'Gutmann',
//         email: 'Desiree_Aufderhar59@hotmail.com',
//         telephone: '(017) 442-4699 x946',
//         bloodGroup: 'O',
//         location:
//         {
//             type: 'Point',
//             _id: '59a940ea01d0ad21ccc7d441',
//             coordinates: [84.6453, -40.1547]
//         },
//         ip: '108.178.126.215',
//         __v: 0
//     },

//     {
//         _id: '59a942455a5cb02048b8d8fa',
//         firstName: 'Ola',
//         lastName: 'Murazik',
//         email: 'Chaya.Lubowitz@yahoo.com',
//         telephone: '1-366-170-1541',
//         bloodGroup: 'O',
//         location:
//         {
//             type: 'Point',
//             _id: '59a942455a5cb02048b8d8fb',
//             coordinates: [111.8305, -29.6411]
//         },
//         ip: '91.49.201.28',
//         __v: 0
//     }
// ]
// describe('Posting Component', () => {

//     let comp: EsriMapComponent;
//     let fixture: ComponentFixture<EsriMapComponent>;
//     let de: DebugElement;
//     let el: HTMLElement;
//     let sb
//     let infoService
  
//     let infoServiceStub = {
//         saveLocation(long, lat, address){

//         },
//     }
//     let dataServiceStub = {
//         getNearbyDonors(longitude, latitude) {
            
//         }
//     }
//     let GraphicsServiceStub = {
//         setGraphicsFromData(view, SimpleMarkerSymbol, Point, Graphic, data){

//         },

//         showAddingPopup(view, mapPoint, address){

//         }
//     }
 
//     let EsriLoaderServiceStub = {
//         load(obj){
//             return Promise.resolve(1)
//         }
//     }
//     let dataService



//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [RouterTestingModule, EsriMapModule, SharedModule],
//             declarations: [],
//             providers: [
//                 { provide: EsriLoaderService, useValue: EsriLoaderServiceStub },
//                 { provide: GraphicsService, useValue: GraphicsServiceStub },
//                 { provide: InfoService, useValue: infoServiceStub },
//                 {provide: DataService, useValue: dataServiceStub} ,
//                 { provide: SnackBarService, useValue: {} },

//             ],
//         });
//         fixture = TestBed.createComponent(EsriMapComponent);
//         comp = fixture.componentInstance;

//         dataService = fixture.debugElement.injector.get(DataService);
//         infoService = fixture.debugElement.injector.get(InfoService);
//         sb = fixture.debugElement.injector.get(SnackBarService);
//     });


//     fit("should load", () => {
//         comp.ngOnInit()
//         expect(comp).toBeTruthy()
//     })

 
//     // it("should save data to info infoService", () => {
//     //     dataService.getDonorInfo = (id) => {
//     //         return Observable.of(fakeDonors[0])
//     //     }
//     //     expect(infoService.data).toBeTruthy()
//     // })


//     // it("should respond to error from data service", () => {
//     //     dataService.getDonorInfo = (id) => {
//     //         return Observable.throw('Error')
//     //     }
//     //     expect(comp).toBeTruthy()
//     // })



// })
