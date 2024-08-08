import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import {
    type HeightStepType,
    UnControlledDrawer,
} from '#/components/uncontrolled-drawer';
import { RestAreaInformation } from '#/features/rest-area/rest-area-information';
import { theme } from '#/styles/theme';

import * as S from './RestAreaDrawer.style';

const mockUpRestAreaList = [
    {
        restAreaName: '서울만남의광장',
        direction: '부산',
        naverRating: 4.4,
        gasolinePrice: 1020,
        dieselPrice: 1000,
        menuAmount: 17,
        openDate: new Date('2024-08-07'),
        closeDate: new Date('2024-08-08'),
    },
    {
        restAreaName: '서울만남의광장',
        direction: '부산',
        naverRating: 4.4,
        gasolinePrice: 1020,
        dieselPrice: 1000,
        menuAmount: 17,
        openDate: new Date('2024-08-07'),
        closeDate: new Date('2024-08-08'),
    },
    {
        restAreaName: '천안 삼거리',
        direction: '부산',
        naverRating: 4.0,
        gasolinePrice: 1020,
        dieselPrice: 1000,
        menuAmount: 17,
        openDate: new Date('2024-08-07'),
        closeDate: new Date('2024-08-08'),
    },
    {
        restAreaName: '서울만남의광장',
        direction: '부산',
        naverRating: 4.4,
        gasolinePrice: 1020,
        dieselPrice: 1000,
        menuAmount: 17,
        openDate: new Date('2024-08-07'),
        closeDate: new Date('2024-08-08'),
    },
    {
        restAreaName: '서울만남의광장',
        direction: '부산',
        naverRating: 4.4,
        gasolinePrice: 1020,
        dieselPrice: 1000,
        menuAmount: 17,
        openDate: new Date('2024-08-07'),
        closeDate: new Date('2024-08-08'),
    },
    {
        restAreaName: '서울만남의광장',
        direction: '부산',
        naverRating: 4.4,
        gasolinePrice: 1020,
        dieselPrice: 1000,
        menuAmount: 17,
        openDate: new Date('2024-08-07'),
        closeDate: new Date('2024-08-08'),
    },
];

const RestAreaDrawerHeightStepList: HeightStepType[] = [
    { value: 95, unit: 'px' },
    { value: 50, unit: 'dvh' },
    { value: 90, unit: 'dvh' },
];

export const RestAreaListDrawer = () => {
    return (
        <UnControlledDrawer initialOpen={true} isOverlayExist={false}>
            <UnControlledDrawer.Content
                heightStepList={RestAreaDrawerHeightStepList}
            >
                <S.Container gap={20}>
                    <S.Header>
                        <S.RestAreaAmount typography="headingBold18">
                            {`총 `}
                            <Text
                                as="strong"
                                color={theme.color.main[100]}
                                typography="headingBold18"
                            >
                                {mockUpRestAreaList.length}개
                            </Text>
                            의 휴게소를 들릴 수 있어요
                        </S.RestAreaAmount>
                        <Text
                            typography="smallTextMedium12"
                            color={theme.color.blk[40]}
                        >
                            전국 휴게소의 주차 시설 및 화장실은 24시간 이용
                            가능합니다.
                        </Text>
                    </S.Header>
                    <S.RestAreaList>
                        <S.RestAreaListInner>
                            {mockUpRestAreaList.map((restArea) => (
                                <RestAreaInformation {...restArea} />
                            ))}
                        </S.RestAreaListInner>
                    </S.RestAreaList>
                </S.Container>
            </UnControlledDrawer.Content>
        </UnControlledDrawer>
    );
};
