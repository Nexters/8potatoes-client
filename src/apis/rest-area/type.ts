import type { RestAreaMenuDataType } from '#/types/menu';
import type {
    RestAreaAdditionalDataType,
    RestAreaDetailAtHighwayType,
    RestAreaGasStationDataType,
    RestAreaParkingDataType,
} from '#/types/rest-area';

export interface HighwayRestAreaListParams {
    from: string;
    to: string;
    roadNames: string;
}

export interface HighwayRestAreaListResponse {
    totalReststopCount: number;
    reststops: RestAreaDetailAtHighwayType[];
}

export interface RestAreaDetailInfoParams {
    reststopCode: string;
}

export interface RestAreaDetailInfoResponse {
    name: string; // 휴게소 이름
    isOperating: boolean; // 식당 운영중 여부
    direction?: string; // 방향 정보
    startTime?: string; // 식당 운영 시작 시간 (옵션 필드)
    endTime?: string; // 식당 운영 종료 시간 (옵션 필드)
    naverRating?: number; // 네이버 평점 (옵션 필드, Float 대신 number 사용)
    gasStationData: RestAreaGasStationDataType; // 주유소 정보
    parkingData: RestAreaParkingDataType; // 주차 정보
    reststopData: RestAreaAdditionalDataType; // 휴게소 기타 정보
    menuData: RestAreaMenuDataType; // 메뉴 데이터 리스트
}
