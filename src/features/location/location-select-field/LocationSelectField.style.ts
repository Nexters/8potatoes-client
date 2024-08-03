import styled from '@emotion/styled';

export const Container = styled.div`
    cursor: pointer;
`;

export const InputLabel = styled.span`
    color: ${({ theme }) => theme.color.blk[30]};

    font-size: 14px;
    font-weight: 400;
`;

export const InputRequired = styled.span`
    color: ${({ theme }) => theme.color.error[100]};
`;

export const SelectField = styled.div`
    font-size: 18px;
    font-weight: 400;

    margin-top: 4px;
`;

export const UnSelectedLocation = styled.p`
    color: ${({ theme }) => theme.color.blk[40]};
`;

export const SelectedLocation = styled.p`
    color: ${({ theme }) => theme.color.blk[100]};
`;
