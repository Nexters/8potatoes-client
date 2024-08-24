import { Polyline } from 'react-naver-maps';

import { theme } from '#/styles/theme';

interface JourneyPathProps {
    journeyPathList: naver.maps.LatLng[];
}

export const JourneyPath = ({ journeyPathList }: JourneyPathProps) => (
    <Polyline
        path={journeyPathList}
        strokeColor={theme.color.main[100]}
        strokeLineJoin="round"
        strokeWeight={6}
        strokeStyle="solid"
        clickable={false}
    />
);
