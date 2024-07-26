import { LocationInformationType } from '#/types/location';

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
    addressInfo: {
        fullAddress: string;
        city_do: string;
        gu_gun: string;
        eup_myun: string;
        ri: string;
        roadName: string;
        buildingIndex: string;
        buildingName: string;
        mappingDistance: number;
        bunji: string;
        adminDongCoord: {
            lat: string;
            lon: string;
        };
        legalDongCoord: {
            lat: string;
            lon: string;
        };
        roadCoord: {
            lat: string;
            lon: string;
        };
    };
}
