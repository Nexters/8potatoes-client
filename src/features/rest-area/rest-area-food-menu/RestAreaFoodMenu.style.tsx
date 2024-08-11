import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

export const Header = styled.div`
    position: relative;
    padding: 20px;
    border-radius: 20px;
    background-color: ${theme.color.main[10]};

    &::after {
        z-index: 1;
        content: '';
        position: absolute;
        bottom: -2px;
        left: 20px;
        width: calc(100% - 40px);
        border-bottom: 4px dashed ${theme.color.main[30]};
    }
`;

export const Container = styled(FlexBox)`
    padding: 32px 20px;
    border-radius: 20px;
    background-color: ${theme.color.main[10]};

`;

export const FoodMenu = styled(FlexBox)`
    align-items: flex-start;
    justify-content: space-between;
`

export const Badge = styled.span(
    ({ type }: { type: 'signature' | 'popular' }) => {
        const styles = {
            signature: {
                backgroundColor: theme.color.wht[100],
                color: theme.color.main[100],
                borderColor: theme.color.main[100],
            },
            popular: {
                backgroundColor: theme.color.main[100],
                color: theme.color.wht[100],
                borderColor: 'transparent',
            },
        } as const;

        return css`
            padding: 4px 8px;
            border-radius: 8px;
            border: 1px solid ${styles[type].borderColor};
            background-color: ${styles[type].backgroundColor};
            color: ${styles[type].color};
        `;
    },
);
