export const modules = [
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Track",
    "esri/widgets/Search",
    "esri/geometry/support/webMercatorUtils",
     "esri/layers/FeatureLayer",
     "esri/tasks/Locator",
]


export function  addUI(view, track, searchWidget){
    view.ui.add(track, "top-left");
    view.ui.add(searchWidget, {
        position: "top-left",
        index: 2
    });
 }
 