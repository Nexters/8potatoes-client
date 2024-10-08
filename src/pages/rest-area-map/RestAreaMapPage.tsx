import {
    NaverMap,
    Container as NaverMapContainer,
    Polyline,
    useNavermaps,
} from 'react-naver-maps';
import { type Location, useLocation, useNavigate } from 'react-router-dom';

import { DestinationIndicator } from '#/features/rest-area/destination-indicator';
import { DestinationMarker } from '#/features/rest-area/destination-marker';
import { RestAreaBubbleMarker } from '#/features/rest-area/rest-area-bubble-marker';
import { RestAreaListDrawer } from '#/features/rest-area/rest-area-drawer';
import { useGetDestinationPath } from '#/query-hooks/location/query';
import { useGetHighwayRestAreaList } from '#/query-hooks/rest-area/query';
import { theme } from '#/styles/theme';
import type { SearchOptionType, SelectedLocationType } from '#/types/location';

export const RestAreaMapPage = () => {
    const naverMaps = useNavermaps();
    const navigate = useNavigate();

    const location: Location<Record<SearchOptionType, SelectedLocationType>> =
        useLocation();

    const { origin, destination } = location.state;

    const {
        data: { journeyPathList = [], highways = {} } = {},
        isSuccess: isValidJourney,
    } = useGetDestinationPath({
        startX: origin.lon,
        startY: origin.lat,
        endX: destination.lon,
        endY: destination.lat,
    });

    const { data: restAreaData, isSuccess: isValidHighwayRestArea } =
        useGetHighwayRestAreaList(
            {
                from: `${origin.lat},${origin.lon}`,
                to: `${destination.lat},${destination.lon}`,
                highways,
            },
            { enabled: isValidJourney },
        );

    const mapBound = {
        north: Math.max(origin.lat, destination.lat),
        south: Math.min(origin.lat, destination.lat),
        east: Math.max(origin.lon, destination.lon),
        west: Math.min(origin.lon, destination.lon),
    };

    const startPosition = isValidJourney
        ? journeyPathList[0]
        : new naverMaps.LatLng(origin.lat, origin.lon);
    const endPosition = isValidJourney
        ? journeyPathList.at(-1)
        : new naverMaps.LatLng(destination.lat, destination.lon);

    return (
        <NaverMapContainer style={{ height: '100dvh' }}>
            <DestinationIndicator
                start={origin.addressName}
                end={destination.addressName}
                onClick={() =>
                    navigate('/', { state: { origin, destination } })
                }
            />
            {isValidHighwayRestArea && (
                <RestAreaListDrawer
                    totalRestAreaCount={restAreaData.totalReststopCount}
                    restAreaList={restAreaData.reststops}
                />
            )}
            <NaverMap maxBounds={mapBound} scrollWheel={false}>
                {isValidJourney && (
                    <>
                        <Polyline
                            path={journeyPathList}
                            strokeColor={theme.color.main[100]}
                            strokeLineJoin="round"
                            strokeWeight={6}
                            strokeStyle="solid"
                            clickable={false}
                        />
                        <DestinationMarker isStart position={startPosition} />
                        <DestinationMarker position={endPosition} />
                    </>
                )}
                {isValidHighwayRestArea &&
                    restAreaData.reststops.map(
                        ({ name, location, isRecommend }) => (
                            <RestAreaBubbleMarker
                                direction={'부산'}
                                restAreaName={name}
                                isRecommend={isRecommend}
                                position={
                                    new naver.maps.LatLng(
                                        location.latitude,
                                        location.longitude,
                                    )
                                }
                            />
                        ),
                    )}
            </NaverMap>
        </NaverMapContainer>
    );
};
