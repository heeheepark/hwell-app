import React from 'react';
import Map from './Map';
import Markers from './Markers';
import { NaverMap } from '@/types/map';
import useMap from '@/hooks/useMap';

// Marker를 그려야 한다.
// Marker는 naver.map 객체에 그려야 합니다. (전역관리, 전역참조)

const MapScene = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapScene;
