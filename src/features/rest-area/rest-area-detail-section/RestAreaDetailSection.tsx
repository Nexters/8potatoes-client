import { ComponentProps } from 'react';

import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';

import * as S from './RestAreaDetailSection.style';

interface RestAreaDetailSectionProps extends ComponentProps<typeof FlexBox> {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description?: string;
}

export const RestAreaDetailSection = ({
    title,
    icon: Icon,
    description,
    children,
    ...restProps
}: RestAreaDetailSectionProps) => (
    <S.Section gap={32} {...restProps}>
        <FlexBox
            row
            flexOption={{
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <S.Title row gap={12}>
                <Icon width={24} height={24} />
                <Text typography="headingBold20" color={theme.color.blk[100]}>
                    {title}
                </Text>
            </S.Title>
            <Text color={theme.color.blk[40]} typography="bodySemiBold14">
                {description}
            </Text>
        </FlexBox>
        {children}
    </S.Section>
);
