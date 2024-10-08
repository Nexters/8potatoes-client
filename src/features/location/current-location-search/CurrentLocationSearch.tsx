import { useCallback, useEffect, useState } from 'react';

import { NaverMap, useNavermaps } from 'react-naver-maps';

import CurrentLocationIcon from '#/assets/icons/current-location.svg?react';
import LocationMovingIcon from '#/assets/icons/location-moving.svg?react';
import { Button } from '#/components/button';
import { Header } from '#/components/header';
import { Text } from '#/components/text';
import { Tooltip } from '#/components/tooltip';
import { useGeolocationPosition } from '#/hooks/useGeolocationPosition';
import { useGetReverseGeocoding } from '#/query-hooks/location/query';
import { theme } from '#/styles/theme';
import type {
    GeolocationCoordinatesType,
    GeolocationPointType,
    ReverseGeocodingInformationType,
    SelectedLocationType,
} from '#/types/location';
import { debounce } from '#/utils/common';

import * as S from './CurrentLocationSearch.style';

interface CurrentLocationSearchProps {
    onClose: () => void;
    onSelect: (location: SelectedLocationType) => void;
}

const DEFAULT_ZOOM = 19;

export function CurrentLocationSearch({
    onSelect,
    onClose,
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

    const { geolocationCoordinates } = useGeolocationPosition();

    const { data } = useGetReverseGeocoding({
        isLoaded: isLoadedLocation,
        centerLocation,
    });

    useEffect(() => {
        getCurrentPosition(geolocationCoordinates);
    }, [geolocationCoordinates]);

    useEffect(() => {
        if (!data) {
            return;
        }

        const locationName =
            data.addressInfo?.buildingName ||
            data.addressInfo?.fullAddress ||
            '';
        setCenterLocationName(locationName);
    }, [data]);

    const getCurrentPosition = (
        geolocationCoordinates: GeolocationCoordinatesType,
    ) => {
        setCenterLocation(geolocationCoordinates);
    };

    const handleCenterChanged = useCallback(
        debounce(({ x, y }: GeolocationPointType) => {
            setCenterLocation({ latitude: y, longitude: x });
        }),
        [],
    );

    const handleZoomChanged = (level: number) => {
        setZoom(level);
    };

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
                title="지도에서 위치 설정"
                isVisibleBackspace
                onClickBackspace={onClose}
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
                                <CurrentLocationIcon />
                            </S.CurrentPositionContainer>
                        </Tooltip>
                    </S.MapContainer>

                    <S.LocationPointerContainer
                        onClick={() =>
                            getCurrentPosition(geolocationCoordinates)
                        }
                    >
                        <LocationMovingIcon />
                    </S.LocationPointerContainer>

                    <S.BottomContainer>
                        {data && (
                            <Text
                                typography="headingBold18"
                                color={theme.color.blk[100]}
                            >
                                {centerLocationName}
                            </Text>
                        )}
                        <S.CTABottomSection>
                            <Button
                                isValid
                                onClick={() =>
                                    handleSelectLocation(data?.addressInfo)
                                }
                            >
                                휴게소 찾기
                            </Button>
                        </S.CTABottomSection>
                    </S.BottomContainer>
                </>
            )}
        </>
    );
}
