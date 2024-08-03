import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const SearchList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
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

export const DottedBorder = styled.div`
    margin-top: 20px;
    height: 2px;
    background: ${({ theme }) => `repeating-linear-gradient(
        to right,
        ${theme.color.bg[50]},
        ${theme.color.bg[50]} 7px,
        transparent 7px,
        transparent 15px
    )`};
`;

export const LocationPointerContainer = styled.div`
    padding: 0 5px 5px;
    background-color: ${({ theme }) => theme.color.main[10]};
    border-radius: 30px;
`;

export const CurrentLocation = styled.button`
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
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100dvh;
    padding: 0 20px;
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
