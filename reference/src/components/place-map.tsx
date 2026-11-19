import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const places = [
  { name: "Liesenbrücke", lat: 52.5416, lng: 13.3795 },
  { name: "Polizeipräsidium / Alexa", lat: 52.5195, lng: 13.4148 },
  { name: "Topographie des Terrors", lat: 52.5066, lng: 13.3835 },
  { name: "Lunapark am Halensee", lat: 52.4963, lng: 13.2852 },
  { name: "St. Hedwig-Krankenhaus", lat: 52.5284, lng: 13.3964 },
  { name: "Rotes Rathaus", lat: 52.5186, lng: 13.4081 },
];

export default function PlaceMap({ selected, onSelect }: { selected: number; onSelect: (index: number) => void }) {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markers = useRef<L.Marker[]>([]);
  const callback = useRef(onSelect);
  callback.current = onSelect;
  useEffect(() => {
    if (!container.current) return;
    const instance = L.map(container.current, { scrollWheelZoom: false });
    map.current = instance;
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>', maxZoom: 19 }).addTo(instance);
    markers.current = places.map((place, index) => L.marker([place.lat, place.lng], { icon: L.divIcon({ className: "place-marker", html: `<span>${index + 1}</span>`, iconSize: [36, 36], iconAnchor: [18, 18] }), title: place.name }).addTo(instance).bindPopup(`${index + 1}. ${place.name}`).on("click", () => callback.current(index)));
    instance.fitBounds(L.latLngBounds(places.map(p => [p.lat, p.lng] as [number, number])), { padding: [35, 35] });
    return () => { instance.remove(); map.current = null; markers.current = []; };
  }, []);
  useEffect(() => {
    const place = places[selected];
    if (!place || !map.current) return;
    map.current.panTo([place.lat, place.lng]);
    markers.current[selected]?.openPopup();
  }, [selected]);
  return <div ref={container} className="place-map h-[480px] w-full" aria-label="Karte der sechs Schauplätze in Berlin" />;
}