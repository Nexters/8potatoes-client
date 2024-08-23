import { FlexBox } from '#/components/flex-box';
import { Skeleton } from '#/components/skeleton';

export function RestAreaFoodCategoryLoading() {
    return (
        <FlexBox row gap={16} style={{ height: '86px' }}>
            <Skeleton width={64} height={64} />
            <Skeleton width={64} height={64} />
            <Skeleton width={64} height={64} />
            <Skeleton width={64} height={64} />
        </FlexBox>
    );
}
