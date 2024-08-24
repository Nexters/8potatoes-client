import { type ComponentProps, forwardRef, useState } from 'react';

import { renderToString } from 'react-dom/server';
import { Marker } from 'react-naver-maps';

import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { useDisclosure } from '#/hooks/useDisclosure';

import {
    LeftSideBubbleMarker,
    LeftSideRecommendMarker,
    RecommendFlagIcon,
    RightSideBubbleMarker,
    RightSideRecommendMarker,
} from './BubbleSideMarker';
import * as S from './RestAreaBubbleMarker.style';

export interface RestAreaBubbleMarkerImplProps extends ComponentProps<'div'> {
    isRecommend?: boolean;
    restAreaName: string;
    direction: string;
}

export const RestAreaBubbleMarkerImpl = forwardRef<
    HTMLDivElement,
    RestAreaBubbleMarkerImplProps
>(({ isRecommend, restAreaName, ...restProps }, ref) => {
    const LeftSideMarker = isRecommend
        ? LeftSideRecommendMarker
        : LeftSideBubbleMarker;
    const RightSideMarker = isRecommend
        ? RightSideRecommendMarker
        : RightSideBubbleMarker;

    return (
        <FlexBox
            row
            flexOption={{ alignItems: 'center', justifyContent: 'center' }}
        >
            <LeftSideMarker />
            <S.Container
                row
                gap={4}
                ref={ref}
                isRecommend={isRecommend}
                {...restProps}
            >
                {isRecommend && <RecommendFlagIcon />}
                <Text typography="bodyBold14">{restAreaName}</Text>
            </S.Container>
            <RightSideMarker />
        </FlexBox>
    );
});

type RestAreaBubbleMarkerProps = ComponentProps<typeof Marker> &
    RestAreaBubbleMarkerImplProps;

export const RestAreaBubbleMarker = ({
    isRecommend,
    restAreaName,
    direction,
    ...restProps
}: RestAreaBubbleMarkerProps) => {
    const [width, setWidth] = useState(0);
    const { state: isRender, setTrue: turnOnRender } = useDisclosure(false);

    const icon = {
        content: renderToString(
            <RestAreaBubbleMarkerImpl
                isRecommend={isRecommend}
                restAreaName={restAreaName}
                direction={direction}
            />,
        ),
        size: new naver.maps.Size(width + 40, 16),
        anchor: new naver.maps.Point(width + 40, 16),
    };

    // NOTE : Emotion Style 을 적용하기 위해 Marker 컴포넌트와 RestAreaBubbleMarkerImpl 컴포넌트를 렌더링
    return (
        <>
            <Marker icon={icon} zIndex={Number(isRecommend)} {...restProps} />
            <RestAreaBubbleMarkerImpl
                ref={(element) => {
                    if (element && !isRender) {
                        const { width } = element.getBoundingClientRect();
                        element.style.display = 'none';
                        setWidth(width);
                        turnOnRender();
                    }
                }}
                isRecommend={isRecommend}
                restAreaName={restAreaName}
                direction={direction}
            />
        </>
    );
};
