import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';

import { FOOD_CATEGORIES } from './RestAreaFoodCategory.constants';
import * as S from './RestAreaFoodCategory.style';

interface FoodCategoryOptionProps {
    label: string;
    icon: string;
}

const FoodCategoryOption = ({ label, icon }: FoodCategoryOptionProps) => (
    <S.CategoryOption gap={8}>
        <S.CategoryIcon>{icon}</S.CategoryIcon>
        <Text typography="bodyMedium14">{label}</Text>
    </S.CategoryOption>
);

interface RestAreaFoodCategoryProps {
    totalMenuAmount: number;
}

export const RestAreaFoodCategory = ({
    totalMenuAmount,
}: RestAreaFoodCategoryProps) => {
    return (
        <S.Section gap={24}>
            <FlexBox
                row
                flexOption={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <S.Title row gap={12}>
                    <img
                        alt="전체 메뉴 표시 아이콘"
                        src=""
                        width={24}
                        height={24}
                    />
                    <Text
                        typography="headingBold20"
                        color={theme.color.blk[100]}
                    >
                        전체 메뉴
                    </Text>
                </S.Title>
                <Text color={theme.color.blk[40]} typography="bodySemiBold14">
                    {totalMenuAmount}개의 메뉴
                </Text>
            </FlexBox>

            <S.CategoryWrapper>
                <S.CategoryList row gap={16}>
                    {FOOD_CATEGORIES.map(({ id, label, icon }) => (
                        <FoodCategoryOption
                            key={id}
                            label={label}
                            icon={icon}
                        />
                    ))}
                </S.CategoryList>
            </S.CategoryWrapper>
        </S.Section>
    );
};
