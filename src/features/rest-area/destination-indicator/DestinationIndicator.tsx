import ArrowRightIcon from '#/assets/icons/arrow-right.svg?react';
import { theme } from '#/styles/theme';

import * as S from './DestinationIndicator.style';

interface DestinationIndicatorProps {
    start: string;
    end: string;
}

export const DestinationIndicator = ({ start, end }: DestinationIndicatorProps) => {
    return (
        <S.Container>
            <S.Destination>{start.toString()}</S.Destination>
            <ArrowRightIcon color={theme.color.main[50]} />
            <S.Destination>{end.toString()}</S.Destination>
        </S.Container>
    );
};
