import { debounce } from './utility';
describe('Utility: debounce function', ()=>{
    it('should not go through function except after a delay', ()=>{
        const fn = (x) => 2*x 
        debounce(fn,300)
    })
})

        
