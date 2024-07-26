import { useCallback, useEffect, useState } from 'react';

import { NaverMap, useNavermaps } from 'react-naver-maps';

import CurrentPositionIcon from '#/assets/icons/current-position.svg?react';
import LocationPointerIcon from '#/assets/icons/location-pointer.svg?react';
import { useGetReverseGeocoding } from '#/query-hooks/location/query';
import {
    GeolocationCoordinatesType,
    LocationInformationType,
} from '#/types/location';
import { debounce } from '#/utils/common';

import * as S from './index.style';

interface CurrentLocationSearchProps {
    onCloseSearch: () => void;
    onSelect: (location: LocationInformationType) => void;
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
        debounce(({ x, y }: any) => {
            setCenterLocation({ latitude: y, longitude: x });
        }),
        [],
    );

    return (
        <>
            {isLoaded && (
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
                                {data.addressInfo.fullAddress}{' '}
                                {data.addressInfo.buildingName}
                            </S.CurrentAddress>
                        )}
                        <button
                            onClick={() =>
                                onSelect({
                                    name: 'select',
                                } as LocationInformationType)
                            }
                        >
                            이 위치로 주소 등록
                        </button>
                    </S.BottomContainer>
                </>
            )}
        </>
    );
}

export default CurrentLocationSearch;
