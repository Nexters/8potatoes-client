import { AmenityType } from "./amenity";
import { BrandType } from "./brand";
import { MenuDataType, RepresentativeMenuDataType } from "./menu";
import { RestaurantInfoType } from "./restaurant";

export interface RestAreaDetailAtHighwayType {
    name: string;
    code: string;
    isOperating: boolean;
    gasolinePrice?: string;
    dieselPrice?: string;
    lpgPrice?: string;
    naverRating: number;
    foodMenusCount: number;
    location: {
        latitude: number;
        longitude: number;
    }
    isRecommend?: boolean;
}

export interface RestAreaGasStationDataType {
    gasolinePrice?: string;
    dieselPrice?: string;
    lpgPrice?: string;
    isElectricChargingStation: boolean;
    isHydrogenChargingStation: boolean;
}

export interface RestAreaParkingDataType {
    smallCarSpace: number;
    largeCarSpace: number;
    disabledPersonSpace: number;
    totalSpace: number;
    updateDate: string;
}

export interface RestAreaAdditionalDataType {
    restaurantOperatingTimes: RestaurantInfoType[]; // 운영 시간 리스트
    brands: BrandType[]; // 브랜드 데이터 리스트
    amenities: AmenityType[]; // 편의시설 데이터 리스트
    address: string; // 주소
    phoneNumber: string; // 전화번호
}

export interface RestAreaMenuDataType {
    representativeMenuData: RepresentativeMenuDataType[]; // 대표 메뉴 데이터 (최대 2개)
    totalMenuCount: number; // 전체 메뉴 개수
    recommendedMenuData: MenuDataType[]; // 추천 메뉴 데이터 리스트
    normalMenuData: MenuDataType[]; // 일반 메뉴 데이터 리스트
}
