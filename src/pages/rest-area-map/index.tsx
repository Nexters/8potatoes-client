import { type PropsWithChildren } from 'react';

import { NaverMap, Container as NaverMapContainer } from 'react-naver-maps';

const RestAreaMapPage = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <NaverMapContainer style={{ height: '100dvh' }}>
            <NaverMap>{children}</NaverMap>
        </NaverMapContainer>
    );
};

export default RestAreaMapPage;
