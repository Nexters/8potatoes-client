import styled from '@emotion/styled';

import { Text } from '#/components/text';

export const Container = styled.span`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 200px;
    height: 200px;
`;

export const Tip = styled(Text)`
    margin-top: 20px;
`;
