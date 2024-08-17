import { forwardRef } from 'react';

import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';
import type { MenuDataType } from '#/types/menu';

import * as S from './RestAreaFoodMenu.style';

interface RestAreaFoodMenuProps {
    title: string;
    menus: MenuDataType[];
}

export const RestAreaFoodMenu = forwardRef<
    HTMLDivElement,
    RestAreaFoodMenuProps
>(({ title, menus }, ref) => {
    return (
        <FlexBox ref={ref}>
            <S.Header>
                <Text typography="headingBold20" color={theme.color.blk[100]}>
                    {title}
                </Text>
            </S.Header>
            <S.Container gap={40}>
                {menus.map(
                    ({
                        menuName,
                        menuPrice,
                        isPopularMenu,
                        isSignatureMenu,
                    }) => (
                        <S.FoodMenu row key={menuName}>
                            <FlexBox gap={8}>
                                <Text
                                    typography="headingBold18"
                                    color={theme.color.blk[100]}
                                >
                                    {menuName}
                                </Text>
                                <Text
                                    typography="bodySemiBold16"
                                    color={theme.color.blk[60]}
                                >
                                    {menuPrice}원
                                </Text>
                            </FlexBox>
                            <FlexBox row gap={4}>
                                {isSignatureMenu && (
                                    <S.Badge type="signature">
                                        <Text typography="smallTextBold12">
                                            시그니쳐
                                        </Text>
                                    </S.Badge>
                                )}
                                {isPopularMenu && (
                                    <S.Badge type="popular">
                                        <Text typography="smallTextBold12">
                                            인기
                                        </Text>
                                    </S.Badge>
                                )}
                            </FlexBox>
                        </S.FoodMenu>
                    ),
                )}
            </S.Container>
        </FlexBox>
    );
});
