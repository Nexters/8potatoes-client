import styled from '@emotion/styled';
import { Container } from 'react-naver-maps';

import { BottomSection } from '#/components/bottom-section';
import { theme } from '#/styles/theme';

export const MapContainer = styled(Container)`
    width: 100%;
    height: 100dvh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BottomContainer = styled.div`
    position: absolute;
    bottom: 0;
    height: 165px;
    width: 100%;

    box-sizing: border-box;
    padding: 28px 20px;
    background-color: ${theme.color.wht[100]};
    border-radius: 20px 20px 0 0;
`;

export const CTABottomSection = styled(BottomSection)`
    padding: 28px 20px;
`;

export const LocationPointerContainer = styled.div`
    position: absolute;
    right: 20px;
    bottom: 185px;

    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.05));
`;

export const CurrentPositionContainer = styled.div`
    pointer-events: none;
`;
