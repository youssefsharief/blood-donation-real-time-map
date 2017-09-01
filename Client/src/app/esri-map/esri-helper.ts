export const modules = [
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Track",
    "esri/widgets/Search",
    "esri/Graphic",
    "esri/geometry/support/webMercatorUtils",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
     "esri/Color",
     "esri/layers/GraphicsLayer"
]


export function  addUI(view, track, searchWidget){
    view.ui.add(track, "top-left");
    view.ui.add(searchWidget, {
        position: "top-left",
        index: 2
    });
 }
 