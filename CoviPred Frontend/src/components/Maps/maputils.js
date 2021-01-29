import React from 'react';
import { Circle, Popup } from 'react-leaflet';
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

export const drawMarkers = province_lat_lng => {
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        province_lat_lng && province_lat_lng.map(province => {
            return (
                <Circle center={[province.lat, province.lng]} radius={10000}>
                    <Popup zoomAnimation={true}>
                        {province.prov}
                    </Popup>
                </Circle>
            )
        })
    )
}