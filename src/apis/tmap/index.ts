import { API } from '../api';

import {
    LocationSearchParams,
    LocationSearchResponse,
    ReverseGeocodingParams,
    ReverseGeocodingResponse,
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
