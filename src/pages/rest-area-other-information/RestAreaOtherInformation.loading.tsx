import { FlexBox } from '#/components/flex-box';
import { Skeleton } from '#/components/skeleton';

export function RestAreaOtherInformationLoading() {
    return (
        <FlexBox gap={8} style={{ padding: '0 20px' }}>
            <FlexBox gap={32} style={{ margin: '40px 0' }}>
                <Skeleton width={102} height={24} />
                <FlexBox gap={12}>
                    <Skeleton height={16} />
                    <Skeleton height={16} />
                </FlexBox>
            </FlexBox>
            <FlexBox gap={32} style={{ margin: '40px 0' }}>
                <Skeleton width={102} height={24} />
                <FlexBox row gap={12}>
                    <Skeleton height={112} width={86} />
                    <Skeleton height={112} width={86} />
                    <Skeleton height={112} width={86} />
                    <Skeleton height={112} width={86} />
                </FlexBox>
            </FlexBox>
            <FlexBox gap={32} style={{ margin: '40px 0' }}>
                <Skeleton width={102} height={24} />
                <FlexBox row gap={12}>
                    <Skeleton height={112} width={86} />
                    <Skeleton height={112} width={86} />
                    <Skeleton height={112} width={86} />
                    <Skeleton height={112} width={86} />
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}
