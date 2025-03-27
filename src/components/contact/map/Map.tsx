"use client";
import { TbRouteAltRight } from "react-icons/tb";
import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Link from "next/link";

// Tipos para o mapa
type MapTypeId = "roadmap" | "satellite" | "hybrid" | "terrain";

// Estilos do container do mapa
const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight: "400px",
};

// Posição padrão (exemplo: São Paulo)
const defaultCenter = {
  lat: 33.881248,
  lng: -118.407211,
};

// Configurações do mapa
const defaultOptions = {
  zoomControl: true,
  mapTypeControl: false, // Desabilita o controle padrão
  streetViewControl: false,
  fullscreenControl: false,
};

const CustomGoogleMap = () => {
  const [mapType, setMapType] = useState<MapTypeId>("roadmap");

  // Alterna entre os tipos de mapa
  const toggleMapType = () => {
    setMapType((prev) => {
      const nextType = prev === "roadmap" ? "hybrid" : "roadmap";
      return nextType;
    });
  };

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || ""}
      >
        <div className="absolute top-3 left-3 sm:w-[275px] sm:h-[90px] bg-white pr-8 sm:pr-2 z-50 p-2">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-sm">Manhattan Beach</h2>
                <p className="hidden sm:block text-sm">Califórnia, EUA</p>
              </div>
              <Link
              className="hidden sm:block"
                href={
                  "https://www.google.com/maps/dir//Manhattan+Beach,+CA,+EUA/@33.887404,-118.412146,3280m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x80c2b3c5e2b0632f:0x70351d4f4154520!2m2!1d-118.4092903!2d33.8881489?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                }
              >
                <div className="flex flex-col items-center cursor-pointer group">
                  <TbRouteAltRight size={25} />
                  <p className="group-hover:underline">rotas</p>
                </div>
              </Link>
            </div>
            <div>
              <Link
                href={
                  "https://www.google.com/maps/place/Manhattan+Beach,+CA/@33.887404,-118.412146,3280m/data=!3m1!1e3!4m6!3m5!1s0x80c2b3c5e2b0632f:0x70351d4f4154520!8m2!3d33.8881489!4d-118.4092903!16zL20vMHIwbW4?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                }
              >
                <p className="text-xs cursor-pointer hover:underline">
                  Ver mapa ampliado
                </p>
              </Link>
            </div>
          </div>
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={12}
          options={defaultOptions}
          mapTypeId={mapType}
        >
          {/* Controle personalizado no canto inferior esquerdo */}
          <div className="absolute left-4 bottom-4 z-10">
            <button
              onClick={toggleMapType}
              className="bg-white p-2 rounded-md shadow-md hover:bg-gray-50 transition-colors flex items-center gap-2"
              aria-label="Alternar tipo de mapa"
            >
              <span className="hidden sm:inline">
                {mapType === "roadmap" ? "Satélite" : "Mapa"}
              </span>
              <span className="inline sm:hidden">
                {mapType === "roadmap" ? "🌍" : "🛰️"}
              </span>
            </button>
          </div>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default CustomGoogleMap;
