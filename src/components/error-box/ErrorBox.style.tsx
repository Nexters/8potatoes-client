import styled from '@emotion/styled';

import { FlexBox } from '../flex-box';

export const Container = styled(FlexBox)`
    align-items: center;
`;

export const TextSection = styled(FlexBox)`
    text-align: center;
    justify-content: center;
`;

export const ErrorImage = styled.img`
    width: 100dvw;
    max-width: 375px;
    max-height: 375px;
    aspect-ratio: 1 / 1;
`;
