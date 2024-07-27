import { useCallback, useEffect, useState } from 'react';

import { NaverMap, useNavermaps } from 'react-naver-maps';

import CurrentPositionIcon from '#/assets/icons/current-position.svg?react';
import LocationPointerIcon from '#/assets/icons/location-pointer.svg?react';
import Button from '#/components/button';
import { useGetReverseGeocoding } from '#/query-hooks/location/query';
import {
    GeolocationCoordinatesType,
    GeolocationPointType,
    ReverseGeocodingInformationType,
    SelectedLocationType,
} from '#/types/location';
import { debounce } from '#/utils/common';

import * as S from './index.style';

interface CurrentLocationSearchProps {
    onCloseSearch: () => void;
    onSelect: (location: SelectedLocationType) => void;
}

const DEFAULT_ZOOM = 19;

function CurrentLocationSearch({
    onSelect,
    onCloseSearch,
}: CurrentLocationSearchProps) {
    const [centerLocation, setCenterLocation] =
        useState<GeolocationCoordinatesType>({
            latitude: 0,
            longitude: 0,
        });
    const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);
    const navermaps = useNavermaps();

    const isLoaded =
        centerLocation.latitude !== 0 && centerLocation.longitude !== 0;

    const { data } = useGetReverseGeocoding({ isLoaded, centerLocation });

    useEffect(() => {
        getCurrentPosition();
    }, []);

    const getCurrentPosition = () => {
        function handleSuccess(position: GeolocationPosition) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            setCenterLocation({ latitude, longitude });
            setZoom(DEFAULT_ZOOM);
        }
        function handleError(error: GeolocationPositionError) {
            console.error(error);
        }

        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    };

    const handleCenterChanged = useCallback(
        debounce(({ x, y }: GeolocationPointType) => {
            setCenterLocation({ latitude: y, longitude: x });
        }),
        [],
    );

    const handleSelectLocation = (
        geocoding: ReverseGeocodingInformationType,
    ) => {
        const { fullAddress = '', buildingName = '' } = geocoding;

        const selectedLocation = {
            lat: centerLocation.latitude,
            lon: centerLocation.longitude,
            addressName: buildingName || fullAddress,
        };

        onSelect(selectedLocation);
    };

    return (
        <>
            {isLoaded && (
                <S.Wrapper>
                    <S.MapContainer>
                        <NaverMap
                            center={
                                new navermaps.LatLng(
                                    centerLocation.latitude,
                                    centerLocation.longitude,
                                )
                            }
                            zoom={zoom}
                            onCenterChanged={handleCenterChanged}
                        ></NaverMap>

                        <S.CurrentPositionContainer>
                            <CurrentPositionIcon />
                        </S.CurrentPositionContainer>
                    </S.MapContainer>

                    <S.LocationPointerContainer onClick={getCurrentPosition}>
                        <LocationPointerIcon width={40} height={40} />
                    </S.LocationPointerContainer>

                    <S.BottomContainer>
                        {data && (
                            <S.CurrentAddress>
                                {data.addressInfo?.fullAddress}{' '}
                                {data.addressInfo?.buildingName}
                            </S.CurrentAddress>
                        )}
                        <Button
                            isValid
                            onClick={() =>
                                handleSelectLocation(data?.addressInfo ?? {})
                            }
                        >
                            이 위치로 주소 등록
                        </Button>
                    </S.BottomContainer>
                </S.Wrapper>
            )}
        </>
    );
}

export default CurrentLocationSearch;
