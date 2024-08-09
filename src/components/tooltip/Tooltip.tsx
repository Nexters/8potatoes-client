import { ReactNode, useEffect, useRef, useState } from 'react';

import { theme } from '#/styles/theme';

import { Text } from '../text';

import * as S from './Tooltip.style';

export interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    direction?: 'top' | 'bottom';
}
interface PositionType {
    top: number;
    left: number;
}

const TOOLTIP_GAP = 12;
const TOOLTIP_ARROW_LENGTH = 12;

export function Tooltip({
    content,
    direction = 'top',
    children,
}: TooltipProps) {
    const [position, setPosition] = useState<PositionType>({
        top: 0,
        left: 0,
    });
    const tooltipRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!triggerRef.current || !tooltipRef.current) {
            return;
        }

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        const tooltipTop =
            direction === 'top'
                ? triggerRef.current.scrollTop -
                  tooltipRect.height -
                  TOOLTIP_GAP
                : triggerRef.current.scrollTop +
                  tooltipRect.height +
                  TOOLTIP_GAP +
                  2 * TOOLTIP_ARROW_LENGTH;

        setPosition({
            top: tooltipTop,
            left:
                triggerRef.current.scrollLeft -
                tooltipRect.width / 2 +
                triggerRect.width / 2,
        });
    }, []);

    return (
        <S.Container ref={triggerRef}>
            {children}

            <S.TooltipContents
                ref={tooltipRef}
                left={`${position.left}px`}
                top={`${position.top}px`}
            >
                <Text typography="bodyBold16" color={theme.color.wht[100]}>
                    {content}
                </Text>
                <S.Arrow direction={direction} />
            </S.TooltipContents>
        </S.Container>
    );
}
