import { CSSProperties, PropsWithChildren } from 'react';

import * as S from './Contents.style';

export interface ContentsProps extends PropsWithChildren {
    style?: CSSProperties;
}

export function Contents({ children, style }: ContentsProps) {
    return <S.Wrapper style={{ ...style }}>{children}</S.Wrapper>;
}
