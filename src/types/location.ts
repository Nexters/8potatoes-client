import { SEARCH_OPTION } from '#/constants/location';

export interface GeolocationCoordinatesType {
    latitude: number;
    longitude: number;
}

export interface GeolocationPointType {
    x: number;
    y: number;
}

export interface LocationInformationType {
    id?: string;
    pkey?: string;
    name?: string;
    telNo?: string;
    noorLat?: string;
    noorLon?: string;
    upperAddrName?: string;
    middleAddrName?: string;
    lowerAddrName?: string;
    detailAddrName?: string;
    firstNo?: string;
    secondNo?: string;
    upperBizName?: string;
    middleBizName?: string;
    lowerBizName?: string;
    detailBizName?: string;
    radius?: string;
    newAddressList: {
        newAddress: {
            centerLat?: string;
            centerLon?: string;
            fullAddressRoad?: string;
        }[];
    };
}

export interface ReverseGeocodingInformationType {
    fullAddress?: string;
    city_do?: string;
    gu_gun?: string;
    eup_myun?: string;
    ri?: string;
    roadName?: string;
    buildingIndex?: string;
    buildingName?: string;
    mappingDistance?: number;
    bunji?: string;
    adminDongCoord?: {
        lat?: string;
        lon?: string;
    };
    legalDongCoord?: {
        lat?: string;
        lon?: string;
    };
    roadCoord?: {
        lat?: string;
        lon?: string;
    };
}

export interface SelectedLocationType {
    lat: number;
    lon: number;
    addressName: string;
}

export type SearchOptionType =
    (typeof SEARCH_OPTION)[keyof typeof SEARCH_OPTION];
