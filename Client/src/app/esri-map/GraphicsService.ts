import { Injectable } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { debounce } from './utility';



@Injectable()
export class GraphicsService {
    longitude
    latitude

    constructor(private dataService: DataService) { }



    assignMouseDragWatcher(view, SimpleMarkerSymbol, Point, Graphic) {
        const self = this
        function captureLocation(event) {
            let x = view.toMap(new Point({
                x: event.x,
                y: event.y
            }))
            // console.log(x);
            self.getPoints(view, SimpleMarkerSymbol, Point, Graphic, x.longitude, x.latitude)
        }
        view.on("drag", debounce(captureLocation, 300))
    }


    getPoints(view, SimpleMarkerSymbol, Point, Graphic, longitude, latitude) {
        this.dataService.getFromBackend(longitude, latitude).subscribe(
            data => this.setGraphicsFromData(view, SimpleMarkerSymbol, Point, Graphic, data)
        )

    }

    private setGraphicsFromData(view, SimpleMarkerSymbol, Point, Graphic, data) {
        var markerSymbol = new SimpleMarkerSymbol({
            color: [226, 119, 40],
            outline: { // autocasts as new SimpleLineSymbol()
                color: [255, 255, 255],
                width: 2
            }
        });

        const newGraphics = data.map(person => {

            const point = new Point({
                longitude: person.location.coordinates[0],
                latitude: person.location.coordinates[1]
            })

           return new Graphic({
                geometry: point,
                symbol: markerSymbol,
                attributes: person,
                popupTemplate: {
                    title: "{firstName} {lastName}",
                    content: [{
                        type: "fields",
                        fieldInfos: [{
                            fieldName: "telephone"
                        }, {
                            fieldName: "bloodGroup"
                        }, {
                            fieldName: "email"
                        }]
                    }]
                }
            });
        })
        view.graphics.removeAll()
        view.graphics.addMany(newGraphics)
    }



}


