import styled from '@emotion/styled';

import dashedLine from '#/assets/icons/dashed-line.svg';

export const Wrapper = styled.div`
    height: 100dvh;
`;

export const SearchList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;

    margin: 20px 0;
`;

export const SearchContainer = styled.div`
    margin-top: 20px;
`;

export const SearchText = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.blk[100]};
`;

export const Keyword = styled.span`
    color: ${({ theme }) => theme.color.main[100]};
`;

export const DashedBorder = styled.div`
    margin-top: 20px;
    height: 2px;

    background-image: url(${dashedLine});
    background-repeat: repeat-y;
`;

export const LocationPointerContainer = styled.div`
    padding: 0 5px 5px;
    background-color: ${({ theme }) => theme.color.main[10]};
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

export const CurrentLocationText = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.blk[60]};
`;

export const ContentsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    padding: 20px 20px 0;
`;

export const HeaderContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.wht[100]};
`;

export const ListContents = styled.div`
    flex: 1;
    overflow-y: auto;
`;

export const SearchTipContainer = styled.div`
    height: 100%;
    padding-bottom: 30%;
`;
