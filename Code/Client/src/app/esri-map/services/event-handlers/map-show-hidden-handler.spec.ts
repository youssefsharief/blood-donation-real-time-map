import { addShowHiddenItemsHandler } from './map-show-hidden-handler';
describe('Map Show Hidden Handler', () => {
 
    let view = {
        popup:{
            on(eventName, fn){
                return {1: "ok"}
            }
        }
    }
 
    it('should call view on popup', () => {
        const spy = spyOn(view.popup, 'on')
        addShowHiddenItemsHandler(view)
        expect(spy).toHaveBeenCalled()
    });




 });