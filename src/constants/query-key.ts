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
    ]
};
