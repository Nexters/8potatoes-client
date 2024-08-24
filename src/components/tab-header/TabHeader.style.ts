import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { Z_INDEX } from '#/constants/z-index';
import { theme } from '#/styles/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100dvw;
    max-width: 375px;

    position: absolute;
    top: 0;
    background-color: ${theme.color.wht[100]};
    z-index: ${Z_INDEX.HEADER};
`;

export const HeaderContents = styled(motion.div)`
    padding-top: 64px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 0.3s;
`;

export const RankingInformation = styled(FlexBox)`
    flex-direction: row;
    gap: 2px;

    color: ${theme.color.blk[60]};
`;

export const SplitLine = styled.div`
    height: 16px;
    border-right: 1px solid ${theme.color.blk[20]};
`;

export const TabContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    border-bottom: 2px solid ${theme.color.blk[5]};
`;

export const Tab = styled.div`
    padding-bottom: 20px;
    position: relative;
`;

export const TabTitle = styled(Text)`
    cursor: pointer;
`;

export const SelectBorder = styled.div`
    border-bottom: ${({ theme }) => `4px solid ${theme.color.main[100]}`};
    border-radius: 2px;
    position: absolute;
    bottom: 0;
    width: 116px;
    left: 50%;
    transform: translateX(-50%);
`;

export const TabContent = styled.div`
    flex: 1;
    overflow-y: auto;
`;
