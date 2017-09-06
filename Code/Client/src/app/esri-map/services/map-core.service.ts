import { Injectable } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { GraphicsService } from '../../shared/services/graphics.service';
import { UserService } from '../../shared/services/user.service';
import { addUIWidgets } from './map-ui-widgets';
import { center } from '../esri.config';
import { MapCoreEventsHandler } from './event-handlers/map-core-events-handler';

@Injectable()
export class MapCoreService {
    constructor(private dataService: DataService, private graphicsService: GraphicsService, 
        private mapCoreEventsHandler: MapCoreEventsHandler,private userService: UserService) { }

    

    private subscribeForData(view, SimpleMarkerSymbol, Point, Graphic) {
        this.dataService.nearbyDonorsSubscription.subscribe(
            data => this.graphicsService.setGraphicsFromData(view, SimpleMarkerSymbol, Point, Graphic, data),
            error => console.log('Problem with socket connector')
        )
    }


    loadMap(mapDomElement, loadedModules) {
        const [Map, MapView, Track, Search, webMercatorUtils, Locator, Graphic, Point, SimpleMarkerSymbol] = loadedModules
        const map = new Map({ basemap: "osm" });
        const view = new MapView({
            container: mapDomElement,
            map,
            center: center,
            zoom: 10,
        });
        

        // When data arrives from backen render the graphics
        this.subscribeForData(view, SimpleMarkerSymbol, Point, Graphic)

        addUIWidgets(view, Track, Search)
        this.mapCoreEventsHandler.assignMapEventHandlers(view, Locator)
    }

    

    
}

