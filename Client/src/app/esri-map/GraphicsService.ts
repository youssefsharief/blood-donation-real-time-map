import { Injectable } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { debounce } from './utility';



@Injectable()
export class GraphicsService {
    longitude
    latitude

    constructor(private dataService: DataService){}

    

    assignMouseDragWatcher(view, SimpleMarkerSymbol, Point, Graphic) {
        const self=this
        function captureLocation(event) {
            let x = view.toMap(new Point({
                x: event.x,
                y: event.y
            }))
            this.longitude = x.longitude
            this.latitude = x.latitude
            self.getPoints(view, SimpleMarkerSymbol, Point, Graphic, x.longitude, x.latitude)
        }
        view.on("drag", debounce(captureLocation, 300))
    }


    getPoints(view, SimpleMarkerSymbol, Point, Graphic, longitude, latitude){
        this.dataService.getFromBackend(longitude, latitude).subscribe(
            data=> this.setGraphicsFromData(view, SimpleMarkerSymbol, Point, Graphic, data)
        )
        
    }

    private setGraphicsFromData(view, SimpleMarkerSymbol, Point, Graphic, data){
        var markerSymbol = new SimpleMarkerSymbol({
            color: [226, 119, 40],
            outline: { // autocasts as new SimpleLineSymbol()
                color: [255, 255, 255],
                width: 2
            }
        });
    
        const y = data.map(person => person.location.coordinates).map(arr => new Point({
            longitude: arr[0],
            latitude: arr[1]
        })).map(point => {
            return new Graphic({
                geometry: point,
                symbol: markerSymbol
            });
        })
        view.graphics.addMany(y)
    }

    

}


