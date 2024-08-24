import {
    NaverMap,
    Container as NaverMapContainer,
    useNavermaps,
} from 'react-naver-maps';
import { type Location, useLocation, useNavigate } from 'react-router-dom';

import { DestinationIndicator } from '#/features/rest-area/destination-indicator';
import { DestinationMarker } from '#/features/rest-area/destination-marker';
import type { SearchOptionType, SelectedLocationType } from '#/types/location';

export const RestAreaMapPageLoading = () => {
    const naverMaps = useNavermaps();
    const navigate = useNavigate();

    const location: Location<Record<SearchOptionType, SelectedLocationType>> =
        useLocation();

    const { origin, destination } = location.state;

    const mapBound = {
        north: Math.max(origin.lat, destination.lat),
        south: Math.min(origin.lat, destination.lat),
        east: Math.max(origin.lon, destination.lon),
        west: Math.min(origin.lon, destination.lon),
    };

    const startPosition = new naverMaps.LatLng(origin.lat, origin.lon);
    const endPosition = new naverMaps.LatLng(destination.lat, destination.lon);

    return (
        <NaverMapContainer style={{ height: '100dvh' }}>
            <DestinationIndicator
                start={origin.addressName}
                end={destination.addressName}
                onClick={() =>
                    navigate('/', { state: { origin, destination } })
                }
            />

            <NaverMap maxBounds={mapBound} scrollWheel={false}>
                <DestinationMarker isStart position={startPosition} />
                <DestinationMarker position={endPosition} />
            </NaverMap>
        </NaverMapContainer>
    );
};
