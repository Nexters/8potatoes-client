import { FlexBox } from '#/components/flex-box';
import { Skeleton } from '#/components/skeleton';

export function RestAreaFoodMenuLoading() {
    return (
        <FlexBox gap={3}>
            <Skeleton height={70} />
            <Skeleton height={300} />
        </FlexBox>
    );
}
