import { async, getTestBed, TestBed } from '@angular/core/testing';
import { addUI, assignMapClickWatcher } from './esri-helper';

describe('Esri: Helper ', () => {
    const view = {
        ui:{
            add(item, config){

            }
        },
        on(eventName, fn){

        }
    }
    const track = {}
    const searchWidget = {}
    const locatorTask =  {}
    const self = {}

    describe('Add UI', ()=>{
        it('add UI function should not throw error', (done) => {
            addUI(view, track, searchWidget)
            done()
        });
    
        it('the add function should have been called twice', () => {
            const spy = spyOn(view.ui, 'add')
            addUI(view, track, searchWidget)
            expect(spy).toHaveBeenCalledTimes(2)
        });
    })
    
    describe('assignMapClickWatcher', ()=>{
        it('should not throw error', (done) => {
            assignMapClickWatcher(view, locatorTask, self)
            done()
        });
    
        it('should call event handler', () => {
            const spy = spyOn(view, 'on')
            assignMapClickWatcher(view, locatorTask, self)
            expect(spy).toHaveBeenCalled()
        });
    })
    

 });