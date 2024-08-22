import { css } from '@emotion/react';
import styled from '@emotion/styled';

import dottedLine from '#/assets/icons/dotted-line.svg';
import { BottomSection } from '#/components/bottom-section';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';

export const Container = styled.div`
    background-color: ${theme.color.bg[30]};
    height: 100dvh;
`;

export const Title = styled(Text)`
    padding-left: 17px;
    height: 100%;
`;

export const Contents = styled.div`
    padding: 0 20px;
    margin-top: 20px;
`;

export const Route = styled.div`
    flex: 1;
`;

export const BorderLine = styled.div<{ isFill: boolean }>(({ isFill }) => {
    const borderTop = `1px solid ${isFill ? theme.color.main[30] : theme.color.bg[100]}`;

    return css`
        margin: 16px 0;
        border-top: ${borderTop};
    `;
});

export const RouteContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    margin-top: 64px;
`;

export const CTABottomSection = styled(BottomSection)`
    padding: 28px 20px;
`;

export const RouteIconContainer = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`;

export const DottedLine = styled.div`
    flex: 1;
    width: 2px;

    background-image: url(${dottedLine});
    background-repeat: repeat-y;
`;
