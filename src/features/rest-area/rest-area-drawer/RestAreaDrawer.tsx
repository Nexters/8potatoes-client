import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import {
    type HeightStepType,
    UnControlledDrawer,
} from '#/components/uncontrolled-drawer';
import { RestAreaInformation } from '#/features/rest-area/rest-area-information';
import { theme } from '#/styles/theme';
import type { RestAreaDetailAtHighwayType } from '#/types/rest-area';

import * as S from './RestAreaDrawer.style';

const RestAreaDrawerHeightStepList: HeightStepType[] = [
    { value: 95, unit: 'px' },
    { value: 50, unit: 'dvh' },
    { value: 90, unit: 'dvh' },
];

interface RestAreaListDrawerProps {
    totalRestAreaCount: number;
    restAreaList: RestAreaDetailAtHighwayType[];
}

export const RestAreaListDrawer = ({
    totalRestAreaCount,
    restAreaList,
}: RestAreaListDrawerProps) => {
    return (
        <UnControlledDrawer
            initialOpen={true}
            isOverlayExist={false}
            isCloseWhenSlideDown={false}
        >
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
                                {totalRestAreaCount}개
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
                        <FlexBox>
                            {restAreaList.map((restArea) => (
                                <RestAreaInformation {...restArea} />
                            ))}
                        </FlexBox>
                    </S.RestAreaList>
                </S.Container>
            </UnControlledDrawer.Content>
        </UnControlledDrawer>
    );
};
