import { Map, Marker, Popup } from 'react-map-gl';

const WasteMap = ({ bins }) => {
  return (
    <Map
      initialViewState={{ latitude: 51.5074, longitude: -0.1278, zoom: 12 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      {bins.map(bin => (
        <Marker key={bin.id} latitude={bin.lat} longitude={bin.lng}>
          <div className={`bin-marker ${bin.status}`}>
            <Popup>
              <BinPopupInfo bin={bin} />
            </Popup>
          </div>
        </Marker>
      ))}
    </Map>
  );
};