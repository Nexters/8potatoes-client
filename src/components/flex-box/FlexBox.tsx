import { CSSProperties, ComponentProps, ElementType } from 'react';

import * as S from './FlexBox.style';

export interface FlexBoxProps extends ComponentProps<'div'> {
    row?: boolean;
    as?: ElementType;
    gap?: number | [number, number];
    flexOption?: Pick<
        CSSProperties,
        | 'flex'
        | 'flexBasis'
        | 'flexDirection'
        | 'flexFlow'
        | 'flexGrow'
        | 'flexShrink'
        | 'flexWrap'
        | 'alignItems'
        | 'alignContent'
        | 'justifyContent'
        | 'order'
    >;
}

export const FlexBox = ({
    as,
    row = false,
    gap = 0,
    flexOption,
    className,
    children,
    ...restProps
}: FlexBoxProps) => (
    <S.Container
        as={as || 'div'}
        row={row}
        gap={gap}
        flexOption={flexOption}
        className={className}
        {...restProps}
    >
        {children}
    </S.Container>
);