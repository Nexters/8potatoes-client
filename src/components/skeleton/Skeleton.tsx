import * as S from './Skeleton.style';

interface SkeletonProps {
    width?: number | string;
    height?: number | string;
}

export const Skeleton = ({
    width = '100%',
    height = '16px',
}: SkeletonProps) => <S.Container style={{ width, height }} />;
