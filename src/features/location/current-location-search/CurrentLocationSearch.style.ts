import styled from '@emotion/styled';
import { Container } from 'react-naver-maps';

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
    height: 181px;
    width: 100%;

    box-sizing: border-box;
    padding: 28px 20px;
    background-color: #ffffff;
    border-radius: 20px 20px 0 0;
`;

export const CurrentAddress = styled.p`
    font-size: 18px;
    font-weight: 700;
`;

export const LocationPointerContainer = styled.div`
    position: absolute;
    right: 20px;
    bottom: 214px;
`;

export const CurrentPositionContainer = styled.div`
    pointer-events: none;
`;
