import { renderToString } from 'react-dom/server';

import BubbleTextIcon from '#/assets/icons/bubble-text.svg?react';
import DestinationMarkerIcon from '#/assets/icons/destination-marker.svg?react';
import { theme } from '#/styles/theme';

import * as S from './DestinationMarker.style';

export const DestinationMarker = () => {
    return (
        <S.Container>
            <BubbleTextIcon color={theme.color.error[100]} />
            <DestinationMarkerIcon color={theme.color.error[100]} />
        </S.Container>
    );
};

interface DestinationMarkerProps {
    size: naver.maps.Size;
    anchor: naver.maps.Point | naver.maps.PointLiteral | naver.maps.Position;
}

export const DestinationMarkerHtml = ({
    size,
    anchor,
}: DestinationMarkerProps): naver.maps.HtmlIcon => ({
    content: renderToString(<DestinationMarker />),
    size,
    anchor,
});
