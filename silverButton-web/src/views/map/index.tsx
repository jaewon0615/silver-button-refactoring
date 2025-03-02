/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from "react";

const Map: React.FC = () => {
  const [locationName, setLocationName] = useState<string>("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=d8816cf3f64c7b0eb51bbbd847d6b222&autoload=true&libraries=services";
    script.async = true;

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        console.log("Kakao Maps API loaded");
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          if (!container) {
            console.error("Map container element not found!");
            return;
          }

          console.log("Map container found");

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                console.log("Current location:", lat, lng);

                const currentPosition = new window.kakao.maps.LatLng(lat, lng);

                const options = {
                  center: currentPosition,
                  level: 10,
                };

                const map = new window.kakao.maps.Map(container, options);

                new window.kakao.maps.Marker({
                  map: map,
                  position: currentPosition,
                });

                if (window.kakao.maps.services) {
                  console.log("Kakao Maps services loaded");
                  const geocoder = new window.kakao.maps.services.Geocoder();
                  geocoder.coord2RegionCode(
                    lng,
                    lat,
                    (result: any[], status: any) => {
                      console.log("Geocode result:", result, "Status:", status);
                      if (status === window.kakao.maps.services.Status.OK) {
                        if (result[0]) {
                          setLocationName(result[0].address_name);
                          console.log("Address found:", result[0].address_name);
                        } else {
                          setLocationName("주소를 찾을 수 없습니다.");
                          console.log("No address found");
                        }
                      } else {
                        console.error(
                          "Failed to reverse geocode the location."
                        );
                      }
                    }
                  );
                } else {
                  console.error("Geocoder 서비스가 로드되지 않았습니다.");
                }

                console.log(
                  "Kakao Map created successfully at:",
                  currentPosition
                );
              },
              () => {
                setFallbackPosition();
              }
            );
          } else {
            console.error("Geolocation is not supported by this browser.");
            setFallbackPosition();
          }
        });
      } else {
        console.error("Failed to load Kakao Maps API");
      }
    };

    script.onerror = () => {
      console.error("Failed to load Kakao Maps API");
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const setFallbackPosition = () => {
    const fallbackPosition = new window.kakao.maps.LatLng(35.1576, 129.059);
    const container = document.getElementById("map");

    if (!container) return;

    const options = {
      center: fallbackPosition,
      level: 10,
    };

    const map = new window.kakao.maps.Map(container, options);

    new window.kakao.maps.Marker({
      map: map,
      position: fallbackPosition,
    });

    setLocationName("부산 서면");
    console.error("Failed to get current location. Fallback to 서면.");
  };

  return (
    <div css={s.mapbox}>
      <h3>현재 위치: {locationName || "Loading..."}</h3>
      <div id="map" css={s.mapContainerStyle} />
    </div>
  );
};

export default Map;
