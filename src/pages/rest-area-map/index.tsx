import { type PropsWithChildren } from 'react';

import {
    NaverMap,
    Container as NaverMapContainer,
    useNavermaps,
} from 'react-naver-maps';

import { DestinationIndicator } from '#/features/rest-area/destination-indicator';
import {
    DestinationMarker,
    DestinationMarkerImpl,
} from '#/features/rest-area/destination-marker';
import { RestAreaBubbleMarkerImpl } from '#/features/rest-area/rest-area-bubble-marker';

const RestAreaMapPage = ({ children }: PropsWithChildren<unknown>) => {
    const naverMaps = useNavermaps();

    return (
        <>
            <RestAreaBubbleMarkerImpl
                isCenter
                direction=""
                restAreaName=""
                style={{ display: 'none' }}
            />
            <DestinationMarkerImpl style={{ display: 'none' }} />
            <NaverMapContainer style={{ height: '100dvh' }}>
                <DestinationIndicator start="서울" end="부산" />
                <NaverMap>
                    <DestinationMarker
                        isStart
                        position={new naverMaps.LatLng(37.3595704, 127.105399)}
                    />
                    <DestinationMarker
                        position={new naverMaps.LatLng(37.4595704, 127.105399)}
                    />
                    {children}
                </NaverMap>
            </NaverMapContainer>
        </>
    );
};

export default RestAreaMapPage;
