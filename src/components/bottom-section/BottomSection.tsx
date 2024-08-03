import { CSSProperties, PropsWithChildren } from 'react';

import * as S from './BottomSection.style';

interface BottomSectionProps extends PropsWithChildren {
    style?: CSSProperties;
}

export function BottomSection({ children, style }: BottomSectionProps) {
    return <S.Container style={style}>{children}</S.Container>;
}
