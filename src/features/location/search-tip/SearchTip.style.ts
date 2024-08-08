import styled from '@emotion/styled';

import { Text } from '#/components/text';

export const Container = styled.span`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const IconBackground = styled.div`
    border-radius: 30px;
    background-color: ${({ theme }) => theme.color.main[10]};
    padding: 10px;
`;

export const Tip = styled(Text)`
    margin-top: 20px;
`;
