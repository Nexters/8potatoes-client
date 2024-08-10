import { API } from '../api';

import { VehiclePathResponse } from './type';
import {
    LocationSearchParams,
    LocationSearchResponse,
    ReverseGeocodingParams,
    ReverseGeocodingResponse,
    VehiclePathParams,
} from './type';

export async function getLocationSearchData({
    page,
    searchKeyword,
    centerLon,
    centerLat,
    appKey,
}: LocationSearchParams): Promise<LocationSearchResponse> {
    const data = await API.get<LocationSearchParams>(`/tmap/pois`, {
        page,
        searchKeyword,
        centerLon,
        centerLat,
        appKey,
    });
    return data;
}

export async function getReverseGeocodingData({
    lat,
    lon,
    appKey,
}: ReverseGeocodingParams): Promise<ReverseGeocodingResponse> {
    const data = await API.get<ReverseGeocodingParams>(
        `/tmap/geo/reversegeocoding`,
        {
            lat,
            lon,
            appKey,
        },
    );
    return data;
}

// 시작, 종료, 경유지 좌표를 기반으로 자동차 경로 데이터를 반환하는 getVehiclePath
export async function getVehiclePath({
    startX,
    startY,
    endX,
    endY,
    passList,
    reqCoordType = 'WGS84GEO',
    resCoordType = 'WGS84GEO',
}: VehiclePathParams) {
    const baseURL = `https://apis.openapi.sk.com/tmap`;
    const appKey = import.meta.env.VITE_TMAP_APP_KEY;

    return API.post<VehiclePathResponse, VehiclePathParams>(
        '/routes',
        {
            startX,
            startY,
            endX,
            endY,
            ...(passList && { passList }),
            reqCoordType,
            resCoordType,
        },
        {
            baseURL,
            headers: {
                appKey,
            },
            params: {
                version: 1,
                format: 'json',
            },
            withCredentials: false,
        },
    );
}
