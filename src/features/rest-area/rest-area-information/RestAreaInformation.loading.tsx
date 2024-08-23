import { FlexBox } from '#/components/flex-box';
import { Skeleton } from '#/components/skeleton';

export function RestAreaInformationLoading() {
    return (
        <FlexBox gap={3}>
            <Skeleton height={181} />
            <Skeleton height={181} />
        </FlexBox>
    );
}
