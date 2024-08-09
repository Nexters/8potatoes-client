import styled from '@emotion/styled';

import dashedLine from '#/assets/icons/dashed-line.svg';
import { Header } from '#/components/header';
import { theme } from '#/styles/theme';

export const SearchHeader = styled(Header)`
    width: calc(100% - 16px);
`;

export const SearchList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    margin: 20px 0;
`;

export const DashedBorder = styled.div`
    width: 100%;
    margin-top: 40px;
    height: 2px;

    background-image: url(${dashedLine});
    background-repeat: repeat-y;
`;

export const LocationPointerContainer = styled.div`
    padding: 0 5px 5px;
    background-color: ${theme.color.main[10]};
    border-radius: 30px;
`;

export const CurrentLocation = styled.button`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: 20px;

    cursor: pointer;
`;

export const ContentsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    padding-top: 40px;
`;

export const HeaderContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: ${theme.color.wht[100]};
`;

export const ListContents = styled.div`
    flex: 1;
    overflow-y: auto;

    display: flex;
    justify-content: center;
`;

export const SearchTipContainer = styled.div`
    padding-bottom: 30%;
`;
