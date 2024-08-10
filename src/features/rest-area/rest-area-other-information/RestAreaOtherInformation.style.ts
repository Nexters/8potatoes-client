import styled from '@emotion/styled';

import { theme } from '#/styles/theme';

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px 20px;
`;

export const Title = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

export const Divider = styled.div`
    width: 100%;
    height: 8px;
    background-color: #f9f9f9;
`;

export const HourList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const HourListItem = styled.li`
    display: flex;
    justify-content: space-between;
`;

export const FacilityList = styled.ul`
    display: flex;
    overflow: auto;
    gap: 18px;
`;

export const FacilityListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    word-break: keep-all;
`;

export const InformationBox = styled.div`
    padding: 20px;
    border-radius: 20px;
    background-color: ${theme.color.main[10]};

    display: flex;
`;

export const Description = styled.div`
    padding: 0 20px 60px;
`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50px;
`;
