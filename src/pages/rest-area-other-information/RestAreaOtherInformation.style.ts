import styled from '@emotion/styled';

import { FlexBox } from '#/components/flex-box';
import { theme } from '#/styles/theme';

export const Container = styled(FlexBox)`
    background-color: ${theme.color.blk[5]};
`;

export const Title = styled(FlexBox)`
    flex-direction: row;
    gap: 12px;
    align-items: center;
`;

export const HourList = styled(FlexBox)`
    gap: 12px;
    width: 100%;
`;

export const FacilityList = styled(FlexBox)`
    flex-direction: row;
    overflow: auto;
    width: 100%;
    gap: 18px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const FacilityListItem = styled(FlexBox)`
    align-items: center;
    gap: 16px;
    word-break: keep-all;
    text-align: center;
    min-width: 80px;
`;

export const OtherInformationContainer = styled(FlexBox)`
    gap: 12px;
    width: 100%;
`;

export const InformationBox = styled(FlexBox)`
    padding: 20px;
    border-radius: 20px;
    background-color: ${theme.color.main[10]};

    width: 100%;
    flex-direction: row;
`;

export const Description = styled.div`
    background-color: ${theme.color.wht[100]};
`;

export const Image = styled.img`
    min-width: 80px;
    min-height: 80px;
    border-radius: 50px;
`;
