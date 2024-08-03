import { useCallback, useEffect, useState } from 'react';

import { NaverMap, useNavermaps } from 'react-naver-maps';

import CurrentPositionIcon from '#/assets/icons/current-position.svg?react';
import LocationPointerIcon from '#/assets/icons/location-pointer.svg?react';
import { CTAButton } from '#/components/cta-button';
import { Header } from '#/components/header';
import { Tooltip } from '#/components/tooltip';
import { useGetReverseGeocoding } from '#/query-hooks/location/query';
import {
    GeolocationCoordinatesType,
    GeolocationPointType,
    ReverseGeocodingInformationType,
    SelectedLocationType,
} from '#/types/location';
import { debounce } from '#/utils/common';

import * as S from './CurrentLocationSearch.style';

interface CurrentLocationSearchProps {
    onCloseSearch: () => void;
    onSelect: (location: SelectedLocationType) => void;
}

const DEFAULT_ZOOM = 19;

export function CurrentLocationSearch({
    onSelect,
    onCloseSearch,
}: CurrentLocationSearchProps) {
    const [centerLocation, setCenterLocation] =
        useState<GeolocationCoordinatesType>({
            latitude: 0,
            longitude: 0,
        });
    const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);
    const [centerLocationName, setCenterLocationName] = useState<string>('');

    const navermaps = useNavermaps();

    const isLoadedLocation =
        centerLocation.latitude !== 0 && centerLocation.longitude !== 0;

    const { data } = useGetReverseGeocoding({
        isLoaded: isLoadedLocation,
        centerLocation,
    });

    useEffect(() => {
        getCurrentPosition();
    }, []);

    useEffect(() => {
        if (!data) {
            return;
        }

        const locationName = `${data.addressInfo?.fullAddress} ${data.addressInfo?.buildingName}`;
        setCenterLocationName(locationName);
    }, [data]);

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

    const handleZoomChanged = useCallback(
        debounce((level: number) => {
            setZoom(level);
        }),
        [],
    );

    const handleSelectLocation = (
        geocoding: ReverseGeocodingInformationType | undefined,
    ) => {
        if (!geocoding) {
            return;
        }

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
            <Header
                title="지도에서 위치 확인"
                onClickBackspace={onCloseSearch}
            />
            {isLoadedLocation && (
                <>
                    <S.MapContainer>
                        <NaverMap
                            center={
                                new navermaps.LatLng(
                                    centerLocation.latitude,
                                    centerLocation.longitude,
                                )
                            }
                            zoom={zoom}
                            onZoomChanged={handleZoomChanged}
                            onCenterChanged={handleCenterChanged}
                        ></NaverMap>

                        <Tooltip content="표시된 위치가 맞나요?">
                            <S.CurrentPositionContainer>
                                <CurrentPositionIcon />
                            </S.CurrentPositionContainer>
                        </Tooltip>
                    </S.MapContainer>

                    <S.LocationPointerContainer onClick={getCurrentPosition}>
                        <LocationPointerIcon width={20} height={20} />
                    </S.LocationPointerContainer>

                    <S.BottomContainer>
                        {data && (
                            <S.CurrentAddress>
                                {centerLocationName}
                            </S.CurrentAddress>
                        )}
                        <CTAButton
                            isValid
                            onClick={() =>
                                handleSelectLocation(data?.addressInfo)
                            }
                        >
                            이 위치로 주소 등록
                        </CTAButton>
                    </S.BottomContainer>
                </>
            )}
        </>
    );
}
