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
