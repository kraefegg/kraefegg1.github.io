import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView() {
  return (
    <MapContainer center={[-15.8, -47.9]} zoom={4} style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-15.8, -47.9]}>
        <Popup>Projeto Exemplo</Popup>
      </Marker>
    </MapContainer>
  );
}
export default MapView;