/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from "react";

const Map: React.FC = () => {
  const [locationName, setLocationName] = useState<string>("");

  useEffect(() => {
    // Kakao Maps API 로드
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=d8816cf3f64c7b0eb51bbbd847d6b222&autoload=true&libraries=services"; // autoload=true로 변경
    script.async = true;

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        console.log("Kakao Maps API loaded"); // 확인용 로그
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          if (!container) {
            console.error("Map container element not found!");
            return;
          }

          console.log("Map container found"); // 확인용 로그

          // Geolocation으로 현재 위치 가져오기
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                console.log("Current location:", lat, lng); // 확인용 로그

                const currentPosition = new window.kakao.maps.LatLng(lat, lng);

                // 지도 옵션 설정
                const options = {
                  center: currentPosition,
                  level: 10, // 확대 수준을 10으로 설정
                };

                // 지도 생성
                const map = new window.kakao.maps.Map(container, options);

                // 마커 추가
                new window.kakao.maps.Marker({
                  map: map,
                  position: currentPosition,
                });

                // 좌표 -> 주소 변환 (Reverse Geocoding)
                if (window.kakao.maps.services) {
                  console.log("Kakao Maps services loaded"); // 확인용 로그
                  const geocoder = new window.kakao.maps.services.Geocoder();
                  geocoder.coord2RegionCode(lng, lat, (result: any[], status: any) => {
                    console.log("Geocode result:", result, "Status:", status); // 확인용 로그
                    if (status === window.kakao.maps.services.Status.OK) {
                      if (result[0]) {
                        setLocationName(result[0].address_name); // 주소 설정
                        console.log("Address found:", result[0].address_name); // 확인용 로그
                      } else {
                        setLocationName("주소를 찾을 수 없습니다.");
                        console.log("No address found"); // 확인용 로그
                      }
                    } else {
                      console.error("Failed to reverse geocode the location.");
                    }
                  });
                } else {
                  console.error("Geocoder 서비스가 로드되지 않았습니다.");
                }

                console.log("Kakao Map created successfully at:", currentPosition);
              },
              () => {
                // Geolocation 실패 시 fallback 위치로 설정
                setFallbackPosition();
              }
            );
          } else {
            console.error("Geolocation is not supported by this browser.");
            setFallbackPosition(); // Geolocation 지원하지 않으면 fallback 위치로 설정
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

    // 컴포넌트가 언마운트될 때 스크립트 제거
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Geolocation 실패 시 fallback 위치 설정 함수
  const setFallbackPosition = () => {
    const fallbackPosition = new window.kakao.maps.LatLng(35.1576, 129.059); // 부산 서면
    const container = document.getElementById("map");

    if (!container) return;

    const options = {
      center: fallbackPosition,
      level: 10, // 확대 수준을 10으로 설정
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
      <div id="map" css={s.mapContainerStyle}/>
    </div>
  );
};

export default Map;