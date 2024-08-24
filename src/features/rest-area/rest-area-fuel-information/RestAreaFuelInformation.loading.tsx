import { FlexBox } from '#/components/flex-box';
import { Skeleton } from '#/components/skeleton';
import { theme } from '#/styles/theme';

export function RestAreaFuelInformationLoading() {
    return (
        <FlexBox
            gap={32}
            style={{
                height: '305px',
                padding: '40px 20px',
                backgroundColor: theme.color.wht[100],
            }}
        >
            <Skeleton height={32} width={130} />
            <FlexBox row gap={12}>
                <Skeleton height={93} width={108} />
                <Skeleton height={93} width={108} />
                <Skeleton height={93} width={108} />
            </FlexBox>
            <FlexBox gap={12}>
                <Skeleton height={16} />
                <Skeleton height={16} />
            </FlexBox>
        </FlexBox>
    );
}
