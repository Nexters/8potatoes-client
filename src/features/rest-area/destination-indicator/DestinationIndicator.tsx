import ArrowRightIcon from '#/assets/icons/arrow-right.svg?react';
import { theme } from '#/styles/theme';

import * as S from './DestinationIndicator.style';

interface DestinationIndicatorProps {
    start: string;
    end: string;
    onClick: () => void;
}

export const DestinationIndicator = ({
    start = '',
    end = '',
    onClick,
}: DestinationIndicatorProps) => {
    return (
        <S.Container onClick={onClick}>
            <S.Destination>
                <S.DestinationText
                    typography="bodyMedium16"
                    color={theme.color.blk[60]}
                >
                    {start}
                </S.DestinationText>
            </S.Destination>
            <ArrowRightIcon color={theme.color.main[50]} />
            <S.Destination>
                <S.DestinationText
                    typography="bodyMedium16"
                    color={theme.color.blk[60]}
                >
                    {end}
                </S.DestinationText>
            </S.Destination>
        </S.Container>
    );
};
