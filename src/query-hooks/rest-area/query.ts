import { useSuspenseQuery } from '@tanstack/react-query';

import { getHighwayRestAreaList, getRestAreaDetailInfo } from '#/apis/rest-area';
import { HighwayRestAreaListParams } from '#/apis/rest-area/type';
import { REST_AREA_QUERY_KEY } from '#/constants/query-key';

export const useGetHighwayRestAreaList = ({
    from,
    to,
    roadNames,
}: HighwayRestAreaListParams) => {
    return useSuspenseQuery({
        queryKey: REST_AREA_QUERY_KEY.highwayList({ from, to, roadNames }),
        queryFn: () => getHighwayRestAreaList({ from, to, roadNames }),
    });
};

export const useGetRestAreaDetailInfo = (reststopCode: string) => {
    return useSuspenseQuery({
        queryKey: REST_AREA_QUERY_KEY.detail(reststopCode),
        queryFn: () => getRestAreaDetailInfo({ reststopCode }),
        staleTime: 1000 * 60,
    })
}

export const useGetRestAreaGasStationInfo = (reststopCode: string) => {
    return useSuspenseQuery({
        queryKey: REST_AREA_QUERY_KEY.detail(reststopCode),
        queryFn: () => getRestAreaDetailInfo({ reststopCode }),
        select: (response) => response.gasStationData,
        staleTime: 1000 * 60,
    })
}

export const useGetRestAreaParkingInfo = (reststopCode: string) => {
    return useSuspenseQuery({
        queryKey: REST_AREA_QUERY_KEY.detail(reststopCode),
        queryFn: () => getRestAreaDetailInfo({ reststopCode }),
        select: (response) => response.parkingData,
        staleTime: 1000 * 60,
    })
}

export const useGetRestAreaMenuInfo = (reststopCode: string) => {
    return useSuspenseQuery({
        queryKey: REST_AREA_QUERY_KEY.detail(reststopCode),
        queryFn: () => getRestAreaDetailInfo({ reststopCode }),
        select: (response) => response.menuData,
        staleTime: 1000 * 60,
    })
}