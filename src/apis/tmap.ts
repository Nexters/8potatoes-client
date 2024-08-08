
import { getAsync } from '#/apis/API';

export const naverMapRepository = {
    // 시작, 종료, 경유지 좌표를 기반으로 자동차 경로 데이터를 반환하는 getVehiclePathAsync
    async getVehiclePathAsync() {
        return getAsync<any>('/naver-map/map-direction-15/v1/driving', {
            headers: {
                'X-NCP-APIGW-API-KEY-ID': import.meta.env
                    .VITE_X_NCP_APIGW_API_KEY_ID,
                'X-NCP-APIGW-API-KEY': import.meta.env.VITE_X_NCP_APIGW_API_KEY,
            },
            params: {
                start: '126.766204356158,37.42829747263545',
                goal: '129.0750194,35.1797865',
            },
            withCredentials: false,
        });
    },
};
