import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import {
    getLocationSearchData,
    getReverseGeocodingData,
    getVehiclePath,
} from '#/apis/tmap';
import { LOCATION_QUERY_KEY } from '#/constants/query-key';
import type {
    GeolocationCoordinatesType,
    LocationInformationType,
} from '#/types/location';

import { getBoundingCoordinates } from './util';

interface LocationSearchQueryParams {
    searchKeyword: string;
    geolocationCoordinates: GeolocationCoordinatesType;
}

export const useGetLocationSearch = ({
    searchKeyword,
    geolocationCoordinates,
}: LocationSearchQueryParams) => {
    return useInfiniteQuery({
        queryKey: LOCATION_QUERY_KEY.search(searchKeyword),
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
                (acc, val) => [...acc, ...(val.searchPoiInfo.pois.poi ?? [])],
                [],
            ),
        getNextPageParam: ({ searchPoiInfo }) => {
            if (!searchPoiInfo) {
                return undefined;
            }
            const page = parseInt(searchPoiInfo.page);
            const count = parseInt(searchPoiInfo.count);
            const totalCount = parseInt(searchPoiInfo.totalCount);
            return page * count >= totalCount ? undefined : page + 1;
        },
        enabled: searchKeyword.length >= 2,
    });
};

interface ReverseGeocodingQueryParams {
    centerLocation: GeolocationCoordinatesType;
    isLoaded: boolean;
}

export const useGetReverseGeocoding = ({
    centerLocation,
    isLoaded,
}: ReverseGeocodingQueryParams) => {
    return useQuery({
        queryKey: LOCATION_QUERY_KEY.reverseGeocoding(centerLocation),
        queryFn: () =>
            getReverseGeocodingData({
                lat: centerLocation.latitude,
                lon: centerLocation.longitude,
                appKey: import.meta.env.VITE_TMAP_APP_KEY,
            }),
        enabled: isLoaded,
    });
};

interface DestinationPathQueryParams {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}

export const useGetDestinationPath = ({
    startX,
    startY,
    endX,
    endY,
}: DestinationPathQueryParams) => {
    return useQuery({
        queryKey: LOCATION_QUERY_KEY.destinationPath('start', 'end'),
        queryFn: () =>
            getVehiclePath({
                startX,
                startY,
                endX,
                endY,
            }),
        select: ({ features }) => {
            const coordinateMapByRoad: Record<string, number[][][]> = {};
            const pathList: naver.maps.LatLng[] = [];
            features
                .slice(0, -1)
                .map(
                    (
                        { geometry, properties },
                    ) => {
                        if (
                            geometry.type === 'LineString' &&
                            properties?.description !==
                                '경유지와 연결된 가상의 라인입니다'
                        ) {
                            const coordinates = geometry.coordinates
                                .map(
                                    ([lng, lat]) =>
                                        new naver.maps.LatLng(lat, lng),
                                )
                                .slice(1, -1);
                                pathList.push(...coordinates);

                            if (properties.roadType === 0) {
                                const roadName = properties.name;
                                coordinateMapByRoad[roadName] = [
                                    ...(coordinateMapByRoad[roadName] ?? []),
                                    getBoundingCoordinates(
                                        geometry.coordinates,
                                    ),
                                ];
                            }
                        }
                        if (geometry.type === 'Point') {
                            const [lng, lat] = geometry.coordinates;
                            pathList.push(new naver.maps.LatLng(lat, lng));
                        }
                    }
                );

            return {
                journeyPathList: pathList,
                highways: coordinateMapByRoad,
            };
        },
        staleTime: 1000 * 60,
    });
};
