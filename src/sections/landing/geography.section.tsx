import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Tooltip as MapTooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Badge } from "@/components/ui/badge";

type DestType = "safari" | "island" | "gateway";

type MapDest = {
  id: string;
  name: string;
  heroTag: string;
  type: DestType;
  coords: [number, number];
  href: string;
};

const destinations: MapDest[] = [
  { id: "zanzibar",     name: "Zanzibar Island",       heroTag: "Your Gateway to Everything",        type: "island",  coords: [-6.165,  39.202], href: "/destinations/zanzibar"     },
  { id: "nyerere",      name: "Nyerere National Park", heroTag: "Africa's Largest National Park",    type: "safari",  coords: [-9.6,    37.8  ], href: "/destinations/nyerere"      },
  { id: "serengeti",    name: "Serengeti",             heroTag: "The Great Migration",               type: "safari",  coords: [-2.33,   34.83 ], href: "/destinations/serengeti"    },
  { id: "ngorongoro",   name: "Ngorongoro Crater",     heroTag: "World's Largest Intact Caldera",    type: "safari",  coords: [-3.18,   35.59 ], href: "/destinations/ngorongoro"   },
  { id: "tarangire",    name: "Tarangire",             heroTag: "Land of the Giants",                type: "safari",  coords: [-4.0,    36.0  ], href: "/destinations/tarangire"    },
  { id: "lake-manyara", name: "Lake Manyara",          heroTag: "Jewel of the Rift Valley",          type: "safari",  coords: [-3.5,    35.83 ], href: "/destinations/lake-manyara" },
  { id: "mafia-island", name: "Mafia Island",          heroTag: "Swim With Giants",                  type: "island",  coords: [-7.9,    39.85 ], href: "/destinations/mafia-island" },
  { id: "arusha",       name: "Arusha",                heroTag: "Gateway to the Northern Circuit",   type: "gateway", coords: [-3.37,   36.68 ], href: "/destinations/arusha"       },
] as const;

const TYPE_COLORS: Record<DestType, string> = {
  safari:  "#f2ca50",
  island:  "#60a5fa",
  gateway: "#6b7280",
};

const TYPE_LABELS: Record<DestType, string> = {
  safari:  "Safari Destination",
  island:  "Island Experience",
  gateway: "Gateway City",
};

const LEGEND_TYPES: DestType[] = ["safari", "island", "gateway"];

const TANZANIA_CENTER: [number, number] = [-6.3, 35.0];
const TANZANIA_BOUNDS: [[number, number], [number, number]] = [[-13, 28], [0, 43]];

// ─── Compass ──────────────────────────────────────────────────────────────────

function Compass() {
  return (
    <div className="absolute top-5 right-5 z-[1000] bg-surface-container/85 backdrop-blur-md rounded-full border border-outline-variant/20 size-[52px] flex items-center justify-center shadow-xl">
      <svg viewBox="0 0 48 48" className="size-9" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* N arrow */}
        <path d="M24 6 L27.5 21 L24 19 L20.5 21 Z" fill="#f2ca50" />
        {/* S arrow */}
        <path d="M24 42 L20.5 27 L24 29 L27.5 27 Z" fill="currentColor" opacity="0.25" className="text-on-surface" />
        {/* W arrow */}
        <path d="M6 24 L21 20.5 L19 24 L21 27.5 Z" fill="currentColor" opacity="0.25" className="text-on-surface" />
        {/* E arrow */}
        <path d="M42 24 L27 27.5 L29 24 L27 20.5 Z" fill="currentColor" opacity="0.25" className="text-on-surface" />
        {/* Center dot */}
        <circle cx="24" cy="24" r="2.5" fill="#f2ca50" />
        {/* Labels */}
        <text x="24" y="9"  textAnchor="middle" fill="#f2ca50" fontSize="5.5" fontWeight="700" fontFamily="sans-serif">N</text>
        <text x="24" y="46" textAnchor="middle" fill="currentColor" fontSize="4.5" opacity="0.4" fontFamily="sans-serif" className="text-on-surface">S</text>
        <text x="4"  y="25.5" textAnchor="middle" fill="currentColor" fontSize="4.5" opacity="0.4" fontFamily="sans-serif" className="text-on-surface">W</text>
        <text x="44" y="25.5" textAnchor="middle" fill="currentColor" fontSize="4.5" opacity="0.4" fontFamily="sans-serif" className="text-on-surface">E</text>
      </svg>
    </div>
  );
}

// ─── Legend ───────────────────────────────────────────────────────────────────

function Legend() {
  return (
    <div className="absolute bottom-5 left-5 z-[1000] bg-surface-container/85 backdrop-blur-md rounded-xl border border-outline-variant/20 px-4 py-3 shadow-xl flex flex-col gap-2">
      <span className="font-label uppercase tracking-[0.3em] text-[9px] text-on-surface-variant/60 font-bold">
        Map Key
      </span>
      {LEGEND_TYPES.map((type) => (
        <div key={type} className="flex items-center gap-2.5">
          <span
            className="size-2.5 rounded-full shrink-0"
            style={{ backgroundColor: TYPE_COLORS[type] }}
          />
          <span className="text-on-surface text-[11px] font-light">{TYPE_LABELS[type]}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Destination marker ────────────────────────────────────────────────────────

type MarkerProps = {
  dest: MapDest;
  onNavigate: (href: string) => void;
};

function DestinationMarker({ dest, onNavigate }: MarkerProps) {
  const icon = useMemo(() => {
    const color = TYPE_COLORS[dest.type];
    return L.divIcon({
      className: "",
      html: `
        <div class="map-pin-wrapper" title="${dest.name}">
          <div class="map-pin-ring" style="background:${color}"></div>
          <div class="map-pin-dot"  style="background:${color}"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      tooltipAnchor: [0, -14],
    });
  }, [dest.type, dest.name]);

  return (
    <Marker
      position={dest.coords}
      icon={icon}
      eventHandlers={{ click: () => onNavigate(dest.href) }}
    >
      <MapTooltip direction="top" offset={[0, -6]} className="map-tooltip">
        <span className="map-tooltip-name">{dest.name}</span>
        <span className="map-tooltip-tag">{dest.heroTag}</span>
      </MapTooltip>
    </Marker>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function GeographySection() {
  const navigate = useNavigate();

  return (
    <section className="mb-32 md:mb-48">
      {/* Heading */}
      <div className="text-center mb-16">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-xs mb-6"
        >
          Explore Tanzania
        </Badge>
        <h2 className="font-headline text-5xl">Tanzania, All in One Place</h2>
        <p className="text-on-surface-variant mt-4 text-sm max-w-md mx-auto font-light leading-relaxed">
          Nine extraordinary destinations — one team, rooted in Stone Town. Tap any pin to explore.
        </p>
      </div>

      {/* Map container */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ height: 580, isolation: "isolate" }}
      >
        <MapContainer
          center={TANZANIA_CENTER}
          zoom={6}
          minZoom={5}
          maxZoom={13}
          maxBounds={TANZANIA_BOUNDS}
          maxBoundsViscosity={0.75}
          className="h-full w-full"
          zoomControl
          scrollWheelZoom
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
            maxZoom={20}
          />
          {destinations.map((dest) => (
            <DestinationMarker key={dest.id} dest={dest} onNavigate={navigate} />
          ))}
        </MapContainer>

        {/* Edge fade overlays */}
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-background to-transparent z-[999] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent z-[999] pointer-events-none" />

        <Compass />
        <Legend />

        {/* Attribution */}
        <p className="absolute bottom-2 right-3 z-[1000] text-[9px] text-on-surface-variant/30 font-label select-none pointer-events-none">
          © OpenStreetMap contributors · © CARTO
        </p>
      </div>
    </section>
  );
}
