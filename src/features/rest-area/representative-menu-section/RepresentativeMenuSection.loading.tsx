import { FlexBox } from '#/components/flex-box';
import { Skeleton } from '#/components/skeleton';
import { theme } from '#/styles/theme';

export function RepresentativeMenuSectionLoading() {
    return (
        <FlexBox
            gap={28}
            flexOption={{ alignItems: 'center' }}
            style={{
                height: '400px',
                backgroundColor: theme.color.wht[100],
                padding: '40px',
            }}
        >
            <Skeleton width={200} height={30} />
            <Skeleton width={180} height={180} />
            <Skeleton width={120} height={20} />
        </FlexBox>
    );
}
