import styled from '@emotion/styled';

import { Z_INDEX } from '#/constants/z-index';

export const Container = styled.div`
    position: absolute;
    top: 0;
    z-index: ${Z_INDEX.HEADER};

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
