/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from "react";

const Map: React.FC = () => {
  const [locationName, setLocationName] = useState<string>("");
  const [hospitalList, setHospitalList] = useState<any[]>([]); // 병원 리스트 상태 추가
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태 추가

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=addd4d21214f341ba9311c1cdd4b2a3e&autoload=true&libraries=services"; // 앱키 포함
    script.async = true;

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        console.log("Kakao Maps API loaded");

        // 카카오맵 API가 로드된 후에 services.Places 사용
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

                // 병원 검색 기능 추가
                searchHospital(map, currentPosition);

                if (window.kakao.maps.services) {
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

                // 로딩 상태 해제
                setIsLoading(false);
              },
              (error) => {
                console.error("Geolocation error:", error);
                setFallbackPosition();
                setIsLoading(false); // 위치를 가져오지 못했을 경우 로딩 상태 해제
              }
            );
          } else {
            console.error("Geolocation is not supported by this browser.");
            setFallbackPosition();
            setIsLoading(false); // 위치를 가져오지 못했을 경우 로딩 상태 해제
          }
        });
      } else {
        console.error("Failed to load Kakao Maps API");
        setIsLoading(false); // 카카오맵 API 로드 실패 시 로딩 상태 해제
      }
    };

    script.onerror = () => {
      console.error("Failed to load Kakao Maps API");
      setIsLoading(false); // 스크립트 로드 실패 시 로딩 상태 해제
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // 병원 검색 함수 추가
  const searchHospital = (map: any, currentPosition: any) => {
    const places = new window.kakao.maps.services.Places();

    places.keywordSearch("병원", (data: any[], status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        console.log("병원 검색 결과:", data);
        setHospitalList(data); // 검색된 병원 리스트를 상태에 저장

        // 검색된 병원 위치를 지도에 표시
        data.forEach((place: any) => {
          const markerPosition = new window.kakao.maps.LatLng(place.y, place.x);
          new window.kakao.maps.Marker({
            map: map,
            position: markerPosition,
          });
        });
      } else {
        console.error("병원 검색에 실패했습니다.", status);
      }
    });
  };

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
      
      {isLoading ? (
        <div>로딩중...</div>
      ) : (
        <div>
          <h4>주변 병원 목록</h4>
          <ul>
            {hospitalList.length > 0 ? (
              hospitalList.map((hospital, index) => (
                <li key={index}>{hospital.place_name}</li>
              ))
            ) : (
              <li>병원을 찾을 수 없습니다.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Map;
