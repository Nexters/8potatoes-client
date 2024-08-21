import { PropsWithChildren } from 'react';

import { theme } from '#/styles/theme';

import * as S from './SearchTip.style';

interface SearchTipProps extends PropsWithChildren {
    imgSrc: string;
}

export function SearchTip({ children, imgSrc }: SearchTipProps) {
    return (
        <S.Container>
            <S.Image alt="검색 안내 이미지" src={imgSrc} />
            <S.Tip typography="bodyMedium16" color={theme.color.blk[40]}>
                {children}
            </S.Tip>
        </S.Container>
    );
}
