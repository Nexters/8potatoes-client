import styled from '@emotion/styled';
import { Container } from 'react-naver-maps';

export const MapContainer = styled(Container)`
    width: 100vw;
    height: 100dvh;
`;

export const BottomContainer = styled.div`
    position: absolute;
    bottom: 0;
    height: 181px;
    width: 100vw;

    box-sizing: border-box;
    padding: 28px 20px;
    background-color: #ffffff;
    border-radius: 20px 0 0 20px;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: 'none';
`;
