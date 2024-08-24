import { FlexBox } from '#/components/flex-box';
import { Skeleton } from '#/components/skeleton';

export function LocationSearchLoading() {
    return (
        <FlexBox style={{ padding: '64px 20px' }}>
            <Skeleton height="calc(100dvh - 128px)" />
        </FlexBox>
    );
}
