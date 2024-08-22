import AsianFoodIcon from '#/assets/icons/asian-food.svg?react';
import ChineseFoodIcon from '#/assets/icons/chinese-food.svg?react';
import KoreanFoodIcon from '#/assets/icons/korean-food.svg?react';
import RecommendationFoodIcon from '#/assets/icons/recommendation-food.svg?react';
import SnacksIcon from '#/assets/icons/snacks.svg?react';
import WesternFoodIcon from '#/assets/icons/western-food.svg?react';

export const FOOD_CATEGORIES = [
    {
        id: '추천',
        label: '추천',
        icon: <RecommendationFoodIcon width={48} height={48} />,
    },
    {
        id: '스낵',
        label: '스낵',
        icon: <SnacksIcon width={48} height={48} />,
    },
    {
        id: '양식',
        label: '양식',
        icon: <WesternFoodIcon width={48} height={48} />,
    },
    {
        id: '중식',
        label: '중식',
        icon: <ChineseFoodIcon width={48} height={48} />,
    },
    {
        id: '한식',
        label: '한식',
        icon: <KoreanFoodIcon width={48} height={48} />,
    },
    {
        id: '아시안',
        label: '아시안',
        icon: <AsianFoodIcon width={48} height={48} />,
    },
] as const;
