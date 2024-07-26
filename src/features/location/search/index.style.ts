import styled from '@emotion/styled';

export const SearchContainer = styled.div`
    margin-top: 20px;
`;

export const SearchText = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #000000;
`;

export const Keyword = styled.span`
    color: #ff7512;
`;

export const DottedBorder = styled.div`
    margin-top: 20px;
    height: 2px;
    background: repeating-linear-gradient(
        to right,
        #f7ede1,
        #f7ede1 7px,
        transparent 7px,
        transparent 15px
    );
`;

export const NoContentText = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #90887d;
`;

export const CurrentLocation = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: 16px;
`;

export const CurrentLocationText = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: rgba(25, 25, 25, 0.5);
`;
