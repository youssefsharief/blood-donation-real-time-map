// import { async, getTestBed, TestBed } from '@angular/core/testing';
// import { DataService } from '../../../shared/services/data.service';
// import { MapDoubleClickHandler } from './map-double-click-handler';
// import { MapCoreEventsHandler } from './map-core-events-handler';

// describe('Map Core Events Handler', () => {
//     let dataService: DataService
//     let mapDoubleClickHandler: MapDoubleClickHandler
//     let _service: MapCoreEventsHandler
//     let locator = {}
//     let dataServiceStub = {
//         getNearbyDonors(x,y){
//             return true
//         }
//     }
//     let view = { 
//         center:{
//             longitude:10,
//             latitude:20
//         },
//         then(fn){

//         }, 
//         on(eventName, fn){
//             return {"ok":1}
//         }
//     }
//     let mapDoubleClickHandlerStub = {
//         implement(x,y){
//             return true
//         }
//     }
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             providers: [
//                 MapCoreEventsHandler,
//                 {provide: DataService, useValue: dataServiceStub},
//                 {provide: MapDoubleClickHandler, useValue: mapDoubleClickHandlerStub}
//             ]
//         });
//         const testbed = getTestBed();
//         dataService = testbed.get(DataService);
//         _service = testbed.get(MapCoreEventsHandler)
//     });


 
//     fit('should assign map event handlers', () => {
//         _service.assignMapEventHandlers(view, locator)
//         console.log(view);
        
//         expect(_service).toBeTruthy()
        
//     });

//     // fit('should assign map event handlers', () => {
//     //     const spy = spyOn(view, 'on')
//     //     _service.assignMapEventHandlers(view, locator)
//     //     expect(spy).toHaveBeenCalled()
        
//     // });

   


//  });