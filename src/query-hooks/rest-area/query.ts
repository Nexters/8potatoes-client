import {
    type UseQueryOptions,
    useQuery,
    useSuspenseQuery,
} from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import {
    getHighwayRestAreaList,
    getRestAreaDetailInfo,
} from '#/apis/rest-area';
import {
    HighwayRestAreaListParams,
    HighwayRestAreaListResponse,
} from '#/apis/rest-area/type';
import { REST_AREA_QUERY_KEY } from '#/constants/query-key';

export const useGetHighwayRestAreaList = (
    { from, to, highways }: HighwayRestAreaListParams,
    options: Omit<
        UseQueryOptions<HighwayRestAreaListResponse>,
        'queryKey' | 'queryFn'
    >,
) => {
    return useQuery<HighwayRestAreaListResponse>({
        ...options,
        queryKey: REST_AREA_QUERY_KEY.highwayList({ from, to }),
        queryFn: () => getHighwayRestAreaList({ from, to, highways }),
    });
};

export const useGetRestAreaBaseInfo = () => {
    const { restAreaId } = useParams();

    if (!restAreaId) {
        throw new Error('restAreaId가 없습니다.');
    }

    return useSuspenseQuery({
        queryKey: REST_AREA_QUERY_KEY.detail(restAreaId),
        queryFn: () => getRestAreaDetailInfo({ reststopCode: restAreaId }),
        select: ({
            name,
            direction,
            isOperating,
            startTime,
            endTime,
            naverRating,
        }) => ({
            name,
            direction,
            isOperating,
            startTime,
            endTime,
            naverRating,
        }),
        staleTime: 1000 * 60,
    });
};

export const useGetRestAreaGasStationInfo = () => {
    const { restAreaId } = useParams();

    if (!restAreaId) {
        throw new Error('restAreaId가 없습니다.');
    }

    return useSuspenseQuery({
        queryKey: REST_AREA_QUERY_KEY.detail(restAreaId),
        queryFn: () => getRestAreaDetailInfo({ reststopCode: restAreaId }),
        select: (response) => response.gasStationData,
        staleTime: 1000 * 60,
    });
};

export const useGetRestAreaParkingInfo = () => {
    const { restAreaId } = useParams();

    if (!restAreaId) {
        throw new Error('restAreaId가 없습니다.');
    }

    return useSuspenseQuery({
        queryKey: REST_AREA_QUERY_KEY.detail(restAreaId),
        queryFn: () => getRestAreaDetailInfo({ reststopCode: restAreaId }),
        select: (response) => response.parkingData,
        staleTime: 1000 * 60,
    });
};

export const useGetRestAreaMenuInfo = () => {
    const { restAreaId } = useParams();

    if (!restAreaId) {
        throw new Error('restAreaId가 없습니다.');
    }

    return useSuspenseQuery({
        queryKey: REST_AREA_QUERY_KEY.detail(restAreaId),
        queryFn: () => getRestAreaDetailInfo({ reststopCode: restAreaId }),
        select: (response) => response.menuData,
        staleTime: 1000 * 60,
    });
};

export const useGetRestAreaRestStopInfo = () => {
    const { restAreaId } = useParams();

    if (!restAreaId) {
        throw new Error('restAreaId가 없습니다.');
    }

    return useSuspenseQuery({
        queryKey: REST_AREA_QUERY_KEY.detail(restAreaId),
        queryFn: () => getRestAreaDetailInfo({ reststopCode: restAreaId }),
        select: (response) => response.reststopData,
        staleTime: 1000 * 60,
    });
};