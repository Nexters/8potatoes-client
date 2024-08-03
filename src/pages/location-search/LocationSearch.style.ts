import styled from '@emotion/styled';

export const Contents = styled.div`
    padding: 0 20px;
    margin-top: 40px;
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 700;

    color: ${({ theme }) => theme.color.blk[100]};
`;

export const Location = styled.div`
    flex: 1;
`;

export const BorderLine = styled.div<{ isFill: boolean }>`
    margin: 20px 0;
    border-top: ${({ isFill, theme }) =>
        `1px solid ${isFill ? theme.color.main[30] : theme.color.bg[100]}`};
`;

export const RouteContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    margin-top: 64px;
`;

export const RouteIconContainer = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`;

export const DottedLine = styled.div`
    flex: 1;
    width: 1.5px;
    background: ${({ theme }) => `repeating-linear-gradient(
        to bottom,
        ${theme.color.main[30]},
        ${theme.color.main[30]} 3px,
        transparent 2px,
        transparent 6px
    )`};
`;
