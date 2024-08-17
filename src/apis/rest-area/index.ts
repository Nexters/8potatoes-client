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
    highways,
}: HighwayRestAreaListParams) {
    const [response] = await API.post<
        HighwayRestAreaListResponse[],
        Pick<HighwayRestAreaListParams, 'highways'>
    >(
        `/highways/reststops`,
        { highways },
        {
            params: {
                from,
                to,
            },
            baseURL: import.meta.env.VITE_SERVER_URL,
        },
    );
    return response;
}

export async function getRestAreaDetailInfo({
    reststopCode,
}: RestAreaDetailInfoParams) {
    return API.get<RestAreaDetailInfoResponse, RestAreaDetailInfoParams>(
        `/reststop/info`,
        {
            params: { reststopCode },
            baseURL: import.meta.env.VITE_SERVER_URL,
        },
    );
}
