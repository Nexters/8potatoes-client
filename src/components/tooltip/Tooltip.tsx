import { ReactNode, useEffect, useRef, useState } from 'react';

import * as S from './Tooltip.style';

export interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
}
interface PositionType {
    top: number | null;
    left: number | null;
}

const TOOLTIP_GAP = 20;

export function Tooltip({ content, children }: TooltipProps) {
    const [position, setPosition] = useState<PositionType>({
        top: null,
        left: null,
    });
    const tooltipRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (triggerRef.current && tooltipRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const tooltipRect = tooltipRef.current.getBoundingClientRect();

            const percentToAdditionWidth = (tooltipRect.width * 50) / 100;

            setPosition({
                top: window.scrollY - tooltipRect.height - TOOLTIP_GAP,
                left:
                    window.scrollX -
                    percentToAdditionWidth +
                    triggerRect.width / 2,
            });
        }
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
                <S.Arrow></S.Arrow>
            </S.TooltipContents>
        </S.Container>
    );
}
