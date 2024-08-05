import { ComponentProps } from 'react';

import { renderToString } from 'react-dom/server';
import { Marker } from 'react-naver-maps';

import MarkerFlagIcon from '#/assets/icons/marker-flag.svg?react';
import { theme } from '#/styles/theme';

import * as S from './RestAreaBubbleMarker.style';

export interface RestAreaBubbleMarkerImplProps {
    isCenter?: boolean;
    restAreaName: string;
    direction: string;
}

export const RestAreaBubbleMarkerImpl = ({
    isCenter,
    restAreaName,
    direction,
}: RestAreaBubbleMarkerImplProps) => {
    return (
        <S.Container isCenter={isCenter}>
            {isCenter ? <MarkerFlagIcon color={theme.color.wht[100]} /> : null}
            <S.RestAreaName>{`${restAreaName}(${direction})휴게소`}</S.RestAreaName>
        </S.Container>
    );
};

type DestinationMarkerProps = ComponentProps<typeof Marker> &
    RestAreaBubbleMarkerImplProps;

export const RestAreaBubbleMarker = ({
    isCenter,
    restAreaName,
    direction,
    ...restProps
}: DestinationMarkerProps) => {
    const icon = {
        content: renderToString(
            <RestAreaBubbleMarkerImpl
                isCenter={isCenter}
                direction={direction}
                restAreaName={restAreaName}
            />,
        ),
    };
    return <Marker icon={icon} {...restProps} />;
};
