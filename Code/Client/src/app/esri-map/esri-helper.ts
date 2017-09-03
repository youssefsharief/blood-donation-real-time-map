import { debounce } from './utility';
export const modules = [
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Track",
    "esri/widgets/Search",
    "esri/geometry/support/webMercatorUtils",
    "esri/layers/FeatureLayer",
    "esri/tasks/Locator",
    "esri/Graphic",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol",
]


export function addUI(view, track, searchWidget) {
    view.ui.add(track, "top-left");
    view.ui.add(searchWidget, {
        position: "top-left",
        index: 2
    });
}




export function assignMapClickWatcher(view, locatorTask, self) {
    view.on("double-click", function (event) {
        // event.stopPropagation(); // overwrite default click-for-popup behavior

        // Get the coordinates of the click on the view
        var lat = Math.round(event.mapPoint.latitude * 1000) / 1000;
        var lon = Math.round(event.mapPoint.longitude * 1000) / 1000;

        view.popup.open({
            // Set the popup's title to the coordinates of the location
            title: "Reverse geocode: [" + lon + ", " + lat + "]",
            location: event.mapPoint // Set the location of the popup to the clicked location
        });

        // Display the popup
        // Execute a reverse geocode using the clicked location
        locatorTask.locationToAddress(event.mapPoint).then(function (
            response) {
            // If an address is successfully found, show it in the popup's content
            view.popup.content = response.address;

        }).otherwise(function (err) {
            // If the promise fails and no result is found, show a generic message
            view.popup.content =
                "No address was found for this location";
        });
        self.clicked.emit(event.mapPoint)
    });
}









