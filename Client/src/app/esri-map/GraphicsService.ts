import { Injectable } from '@angular/core';
import { DataService } from '../shared/services/data.service';



@Injectable()
export class GraphicsService {
    constructor(private dataService: DataService){}


    setGraphics(view, SimpleMarkerSymbol, Point, Graphic){
        this.dataService.getFromBackend(30, 30).subscribe(
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


