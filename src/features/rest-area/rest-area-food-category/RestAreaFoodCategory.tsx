import { useSearchParams } from 'react-router-dom';

import AlternativeImage from '#/assets/images/alternative-image.png';
import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';

import { FOOD_CATEGORIES } from './RestAreaFoodCategory.constants';
import * as S from './RestAreaFoodCategory.style';

export const RestAreaFoodCategory = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentSelectedCategory = searchParams.get('category') ?? 'total';

    const handleSelectCategory = (category: string) => {
        setSearchParams({ category }, { preventScrollReset: true });
    };

    return (
        <S.Container>
            <S.CategoryList row gap={16}>
                {FOOD_CATEGORIES.map(({ id, label, icon }) => (
                    <S.CategoryOption
                        isSelected={id === currentSelectedCategory}
                        gap={8}
                        key={id}
                        onClick={() => handleSelectCategory(id)}
                    >
                        <img src={AlternativeImage} alt="카테고리 아이콘" />
                        <Text typography="bodyMedium14">{label}</Text>
                    </S.CategoryOption>
                ))}
            </S.CategoryList>
        </S.Container>
    );
};
