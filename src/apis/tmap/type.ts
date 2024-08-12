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

export interface VehiclePathParams {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    passList?: string;
    reqCoordType?: string;
    resCoordType?: string;
};

export interface VehiclePathResponse {
    features: {
        type: 'Feature';
        geometry:
            | {
                  coordinates: [number, number];
                  type: 'Point';
              }
            | {
                  coordinates: [number, number][];
                  type: 'LineString';
              }
        properties: {
            index: number;
            name: string;
            description: string;
            totalDistance: number;
            totalTime: number;
            pointType: 'S' | 'E' | 'B1' | 'B2' | 'B3' | 'N';
        };
    }[];
};