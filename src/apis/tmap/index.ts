import { API } from '../api';

import { LocationSearchParams, LocationSearchResponse } from './type';

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
