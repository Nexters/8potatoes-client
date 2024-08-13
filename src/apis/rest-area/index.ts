import { API } from '../api';

import type {
    HighwayRestAreaListParams,
    HighwayRestAreaListResponse,
    RestAreaDetailInfoParams,
    RestAreaDetailInfoResponse,
} from './type';

export async function getHighwayRestAreaList({
    from,
    to,
    roadNames,
}: HighwayRestAreaListParams) {
    return API.get<HighwayRestAreaListResponse, HighwayRestAreaListParams>(
        `/api/highways/reststops`,
        {
            params: {
                from,
                to,
                roadNames,
            },
        },
    );
}

export async function getRestAreaDetailInfo({
    reststopCode,
}: RestAreaDetailInfoParams) {
    return API.get<RestAreaDetailInfoResponse, RestAreaDetailInfoParams>(
        `/api/reststops/${reststopCode}`,
    );
}
