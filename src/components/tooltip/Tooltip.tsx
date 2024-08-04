import { ReactNode, useEffect, useRef, useState } from 'react';

import * as S from './Tooltip.style';

export interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
}
interface PositionType {
    top: number;
    left: number;
}

const TOOLTIP_GAP = 12;

export function Tooltip({ content, children }: TooltipProps) {
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

        setPosition({
            top:
                triggerRef.current.scrollTop - tooltipRect.height - TOOLTIP_GAP,
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
                {content}
                <S.Arrow />
            </S.TooltipContents>
        </S.Container>
    );
}
