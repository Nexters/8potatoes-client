import { useInfiniteQuery } from '@tanstack/react-query';

import { getLocationSearchData } from '#/apis/tmap';
import {
    GeolocationCoordinatesType,
    LocationInformationType,
} from '#/types/location';

interface LocationSearchQueryParams {
    searchKeyword: string;
    geolocationCoordinates: GeolocationCoordinatesType;
}

export const useGetLocationSearch = ({
    searchKeyword,
    geolocationCoordinates,
}: LocationSearchQueryParams) => {
    return useInfiniteQuery({
        queryKey: ['search', searchKeyword],
        queryFn: ({ pageParam = 1 }) =>
            getLocationSearchData({
                page: pageParam,
                searchKeyword,
                centerLat: geolocationCoordinates.latitude,
                centerLon: geolocationCoordinates.longitude,
                appKey: import.meta.env.VITE_TMAP_APP_KEY,
            }),
        initialPageParam: 1,
        select: ({ pages }) =>
            pages.reduce<LocationInformationType[]>(
                (acc, val) => [...acc, ...val.searchPoiInfo.pois.poi],
                [],
            ),
        getNextPageParam: ({ searchPoiInfo }) => {
            const page = parseInt(searchPoiInfo.page);
            const count = parseInt(searchPoiInfo.count);
            const totalCount = parseInt(searchPoiInfo.totalCount);
            return page * count >= totalCount ? undefined : page + 1;
        },
        enabled: !!searchKeyword,
    });
};