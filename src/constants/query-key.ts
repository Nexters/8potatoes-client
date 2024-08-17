import { HighwayRestAreaListParams } from '#/apis/rest-area/type';
import type { GeolocationCoordinatesType } from '#/types/location';

export const LOCATION_QUERY_KEY = {
    base: ['location'],
    search: (searchKeyword: string) => [
        ...LOCATION_QUERY_KEY.base,
        'search',
        searchKeyword,
    ],
    reverseGeocoding: (centerLocation: GeolocationCoordinatesType) => [
        ...LOCATION_QUERY_KEY.base,
        'reverse-geocoding',
        centerLocation.latitude,
        centerLocation.longitude,
    ],
    destinationPath: (start: string, end: string) => [
        ...LOCATION_QUERY_KEY.base,
        'destination-path',
        start,
        end,
    ],
};

export const REST_AREA_QUERY_KEY = {
    base: ['rest-area'],
    detail: (restAreaCode: string) => [
        ...REST_AREA_QUERY_KEY.base,
        'detail',
        restAreaCode,
    ],
    highwayList: ({ from, to }: Omit<HighwayRestAreaListParams, 'highways'>) => [
        ...REST_AREA_QUERY_KEY.base,
        'highway-list',
        { from, to },
    ],
};
