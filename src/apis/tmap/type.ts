import { LocationInformationType } from '#/types/location';

import { ReverseGeocodingInformationType } from '../../types/location';

export interface LocationSearchParams {
    page: number;
    searchKeyword: string;
    centerLon: number;
    centerLat: number;
    appKey: string;
}

export interface LocationSearchResponse {
    searchPoiInfo: {
        totalCount: string;
        count: string;
        page: string;
        pois: {
            poi: LocationInformationType[];
        };
    };
}

export interface ReverseGeocodingParams {
    lat: number;
    lon: number;
    appKey: string;
}

export interface ReverseGeocodingResponse {
    addressInfo?: ReverseGeocodingInformationType;
}
