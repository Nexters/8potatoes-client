import { type ComponentProps } from 'react';

import { renderToString } from 'react-dom/server';
import { Marker } from 'react-naver-maps';

import BubbleEndTextIcon from '#/assets/icons/bubble-end-text.svg?react';
import BubbleStartTextIcon from '#/assets/icons/bubble-start-text.svg?react';
import DestinationMarkerIcon from '#/assets/icons/destination-marker.svg?react';
import { theme } from '#/styles/theme';

import * as S from './DestinationMarker.style';

interface DestinationMarkerImplProp {
    isStart?: boolean;
}

export const DestinationMarkerImpl = ({
    isStart,
}: DestinationMarkerImplProp) => {
    const color = isStart ? theme.color.error[100] : theme.color.good[100];
    const BubbleTextIcon = isStart ? BubbleStartTextIcon : BubbleEndTextIcon;

    return (
        <S.Container>
            <BubbleTextIcon width={37} color={color} />
            <DestinationMarkerIcon width={32} height={32} color={color} />
        </S.Container>
    );
};

type DestinationMarkerProps = ComponentProps<typeof Marker> & {
    isStart?: boolean;
};

export const DestinationMarker = ({
    isStart,
    ...restProps
}: DestinationMarkerProps) => {
    const icon = {
        content: renderToString(<DestinationMarkerImpl isStart={isStart} />),
    };
    return <Marker icon={icon} {...restProps} />;
};
