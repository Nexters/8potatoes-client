import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

export const Section = styled(FlexBox)`
    padding: 40px 20px;
    height: fit-content;
    background-color: ${theme.color.wht[100]};
`;

export const Title = styled(FlexBox)`
    align-items: center;
`;
