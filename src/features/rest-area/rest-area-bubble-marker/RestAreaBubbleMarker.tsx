import type { ComponentProps } from 'react';

import { renderToString } from 'react-dom/server';
import { Marker } from 'react-naver-maps';

import MarkerFlagIcon from '#/assets/icons/marker-flag.svg?react';
import { Text } from '#/components/text';

import * as S from './RestAreaBubbleMarker.style';

export interface RestAreaBubbleMarkerImplProps extends ComponentProps<'div'> {
    isCenter?: boolean;
    restAreaName: string;
    direction: string;
}

export const RestAreaBubbleMarkerImpl = ({
    isCenter,
    restAreaName,
    direction,
    ...restProps
}: RestAreaBubbleMarkerImplProps) => {
    return (
        <S.Container isCenter={isCenter} {...restProps}>
            {isCenter && <MarkerFlagIcon color="inherit" />}
            <Text typography="bodyBold14">{`${restAreaName}(${direction}) 휴게소`}</Text>
        </S.Container>
    );
};

type RestAreaBubbleMarkerProps = ComponentProps<typeof Marker> &
    RestAreaBubbleMarkerImplProps;

export const RestAreaBubbleMarker = ({
    isCenter,
    restAreaName,
    direction,
    ...restProps
}: RestAreaBubbleMarkerProps) => {
    const icon = {
        content: renderToString(
            <RestAreaBubbleMarkerImpl
                isCenter={isCenter}
                restAreaName={restAreaName}
                direction={direction}
            />,
        ),
    };

    // NOTE : Emotion Style 을 적용하기 위해 Marker 컴포넌트와 RestAreaBubbleMarkerImpl 컴포넌트를 렌더링
    return (
        <>
            <Marker icon={icon} {...restProps} />
            <RestAreaBubbleMarkerImpl
                style={{ display: 'none' }}
                isCenter={isCenter}
                restAreaName={restAreaName}
                direction={direction}
            />
        </>
    );
};
