import { API } from "../api";

import type {
    HighwayRestAreaListParams,
    HighwayRestAreaListResponse,
    RestAreaDetailInfoParams,
    RestAreaDetailInfoResponse,
} from "./type";

export async function getHighwayRestAreaList({
    from,
    to,
    highways,
}: HighwayRestAreaListParams) {
    return API.get<
        HighwayRestAreaListResponse,
        HighwayRestAreaListParams
    >(`/highways/reststops`, {
        params: {
            from,
            to,
            roadNames,
        },
        baseURL: import.meta.env.VITE_SERVER_URL,
    });
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
