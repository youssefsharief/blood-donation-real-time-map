import { Injectable } from '@angular/core';


@Injectable()
export class GraphicsService {
 
    
    setGraphicsFromData(view, SimpleMarkerSymbol, Point, Graphic, data) {

        
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
                        }]
                    }]
                }
            });
        })
        view.graphics.removeAll()
        view.graphics.addMany(newGraphics)
    }



}


