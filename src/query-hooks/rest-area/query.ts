import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import {
    getHighwayRestAreaList,
    getRestAreaDetailInfo,
} from '#/apis/rest-area';
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

export const useGetRestAreaDetailInfo = () => {
    const { restAreaId } = useParams();

    if (!restAreaId) {
        throw new Error('restAreaId가 없습니다.');
    }

    return useSuspenseQuery({
        queryKey: REST_AREA_QUERY_KEY.detail(restAreaId),
        queryFn: () => getRestAreaDetailInfo({ reststopCode: restAreaId }),
        select: ({ name, isOperating, startTime, endTime, naverRating }) => ({
            name,
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
