import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';

import * as S from './RestAreaFoodMenu.style';

// FIXME : 추후 백엔드 API 스펙이 나올 경우 /types 폴더로 마이그레이션
type FoodMenuType = {
    name: string;
    price: number;
    isSignature?: boolean;
    isPopular?: boolean;
};

interface FoodMenuProps extends FoodMenuType {}

export const FoodMenu = ({
    name,
    price,
    isSignature,
    isPopular,
}: FoodMenuProps) => (
    <S.FoodMenu row>
        <FlexBox gap={8}>
            <Text typography="headingBold18" color={theme.color.blk[100]}>
                {name}
            </Text>
            <Text typography="bodySemiBold16" color={theme.color.blk[60]}>
                {price}원
            </Text>
        </FlexBox>
        <FlexBox row gap={4}>
            {isSignature && (
                <S.Badge type="signature">
                    <Text typography="smallTextBold12">시그니쳐</Text>
                </S.Badge>
            )}
            {isPopular && (
                <S.Badge type="popular">
                    <Text typography="smallTextBold12">인기</Text>
                </S.Badge>
            )}
        </FlexBox>
    </S.FoodMenu>
);

interface RestAreaFoodMenuProps {
    title: string;
    menus: FoodMenuType[];
}

export const RestAreaFoodMenu = ({ title, menus }: RestAreaFoodMenuProps) => {
    return (
        <FlexBox>
            <S.Header>
                <Text typography="headingBold20" color={theme.color.blk[100]}>
                    {title}
                </Text>
            </S.Header>
            <S.Container gap={40}>
                {menus.map((menu) => (
                    <FoodMenu
                        key={menu.name}
                        name={menu.name}
                        price={menu.price}
                        isSignature={menu.isSignature}
                        isPopular={menu.isPopular}
                    />
                ))}
            </S.Container>
        </FlexBox>
    );
};
