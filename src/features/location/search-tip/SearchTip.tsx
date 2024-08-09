import { PropsWithChildren } from 'react';

import LocationIcon from '#/assets/icons/location.svg?react';
import { theme } from '#/styles/theme';

import * as S from './SearchTip.style';

export function SearchTip({ children }: PropsWithChildren) {
    return (
        <S.Container>
            <S.IconBackground>
                <LocationIcon
                    fill={theme.color.main[50]}
                    width={40}
                    height={40}
                />
            </S.IconBackground>
            <S.Tip typography="bodyMedium16" color={theme.color.blk[40]}>
                {children}
            </S.Tip>
        </S.Container>
    );
}
