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
        
        const newGraphics = data.map((person, index) => {
           return new Graphic({
                geometry: new Point({
                    longitude: person.location.coordinates[0],
                    latitude: person.location.coordinates[1]
                }),
                symbol: markerSymbol,
                attributes: {
                    firstName: person.firstName,
                    lastName: person.lastName,
                    bloodGroup: person.bloodGroup,
                    telephone: `<a id="telephone-${index}" data="${person.telephone}"  > Hidden </a> `,
                    email: `<a id="email-${index}" data="${person.email}" > Hidden </a> `,
                },
                popupTemplate: {
                    actions: [{
                        title: "Show hidden atributes",
                        id: "show-hidden",
                      }],
                    title: "{firstName} {lastName}",
                    content: [{
                        type: "fields",
                        fieldInfos: [{
                            fieldName: "firstName"
                        }, {
                            fieldName: "lastName"
                        },  {
                            fieldName: "bloodGroup"
                        }, {
                            fieldName: "telephone"
                        }, {
                            fieldName: "email"
                        }, {
                            fieldName: "bloodGroup"
                        },]
                    }]
                }
            });
        })
        view.graphics.removeAll()
        view.graphics.addMany(newGraphics)
    }



}


