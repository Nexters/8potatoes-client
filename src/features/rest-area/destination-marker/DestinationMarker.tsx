import { type ComponentProps } from 'react';

import { renderToString } from 'react-dom/server';
import { Marker } from 'react-naver-maps';

import BubbleEndTextIcon from '#/assets/icons/bubble-end-text.svg?react';
import BubbleStartTextIcon from '#/assets/icons/bubble-start-text.svg?react';
import DestinationMarkerIcon from '#/assets/icons/destination-marker.svg?react';

import * as S from './DestinationMarker.style';

export interface DestinationMarkerImplProp extends ComponentProps<'div'> {
    isStart?: boolean;
}

export const DestinationMarkerImpl = ({
    isStart,
    ...restProps
}: DestinationMarkerImplProp) => {
    const BubbleTextIcon = isStart ? BubbleStartTextIcon : BubbleEndTextIcon;

    return (
        <S.Container {...restProps} isStart={isStart}>
            <BubbleTextIcon width={37} />
            <DestinationMarkerIcon width={32} height={32} />
        </S.Container>
    );
};

type DestinationMarkerProps = ComponentProps<typeof Marker> &
    DestinationMarkerImplProp;

export const DestinationMarker = ({
    isStart,
    position,
    ...restProps
}: DestinationMarkerProps) => {
    const icon = {
        content: renderToString(<DestinationMarkerImpl isStart={isStart} />),
        anchor: new naver.maps.Point(16, 48),
        size: new naver.maps.Size(37, 62),
    };
    return (
        <>
            <Marker
                icon={icon}
                position={position}
                {...restProps}
            />
            <DestinationMarkerImpl
                isStart={isStart}
            />
        </>
    );
};
