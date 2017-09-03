export function debounce(func, wait, immediate?) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};



        
export function showHiddenItems(view){
    let som = document.querySelector('.esri-popup-renderer').childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0]
    const telephone = som.childNodes[3].childNodes[1].childNodes[0].attributes['data'].value
    const email = som.childNodes[4].childNodes[1].childNodes[0].attributes['data'].value
    let myContainer =   <HTMLElement> som.childNodes[3].childNodes[1].childNodes[0]
    myContainer.innerText = telephone
    myContainer =   <HTMLElement> som.childNodes[4].childNodes[1].childNodes[0]
    myContainer.innerText = email
    
}