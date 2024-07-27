import styled from '@emotion/styled';

export const Container = styled.div`
    position: absolute;
    top: 0;
    z-index: 999;

    width: 100%;
    height: 64px;
    background-color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    font-size: 18px;
    font-weight: 700;
`;

export const BackSpace = styled.div`
    position: absolute;
    left: 12px;
    cursor: pointer;
`;
