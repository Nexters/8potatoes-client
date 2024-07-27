export interface GeolocationCoordinatesType {
    latitude: number;
    longitude: number;
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
