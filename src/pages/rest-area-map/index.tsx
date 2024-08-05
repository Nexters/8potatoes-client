import { type PropsWithChildren } from 'react';

import { NaverMap, Container as NaverMapContainer } from 'react-naver-maps';

import { DestinationIndicator } from '#/features/rest-area/destination-indicator';

const RestAreaMapPage = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <NaverMapContainer style={{ height: '100dvh' }}>
            <DestinationIndicator start="서울" end="부산" />
            <NaverMap>{children}</NaverMap>
        </NaverMapContainer>
    );
};

export default RestAreaMapPage;
