import { FlexBox } from '../flex-box';
import { Skeleton } from '../skeleton';

export function TabHeaderLoading() {
    return (
        <FlexBox
            gap={16}
            flexOption={{ alignItems: 'center' }}
            style={{ padding: '72px 0 40px' }}
        >
            <Skeleton width={240} />
            <Skeleton width={250} />
        </FlexBox>
    );
}
