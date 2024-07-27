import { CSSProperties, PropsWithChildren } from 'react';

import * as S from './index.style';

export interface ContentsProps extends PropsWithChildren {
    style?: CSSProperties;
}

function Contents({ children, style }: ContentsProps) {
    return <S.Wrapper style={{ ...style }}>{children}</S.Wrapper>;
}

export default Contents;
