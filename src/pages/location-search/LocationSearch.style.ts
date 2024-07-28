import styled from '@emotion/styled';

export const Container = styled.div`
    height: 100%;
`;

export const Contents = styled.div`
    padding: 0 20px;
    margin-top: 40px;
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
`;

export const Location = styled.div`
    flex: 1;
`;

export const BorderLine = styled.div`
    margin: 20px 0;
    border-top: 1px solid #f4f0ea;
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
    background: repeating-linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 3px,
        transparent 3px,
        transparent 7px
    );
`;
