import ParkingSpaceIcon from '#/assets/icons/parking-space.svg?react';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';
import dayjs from '#/utils/dayjs';

import { RestAreaDetailSection } from '../rest-area-detail-section';

import * as S from './RestAreaParkingInformation.style';

interface RestAreaParkingInformationProps {
    smallCarSpace: number;
    largeCarSpace: number;
    disabledPersonSpace: number;
    totalSpace: number;
    updateDate: string;
}

export const RestAreaParkingInformation = ({
    smallCarSpace,
    largeCarSpace,
    disabledPersonSpace,
    totalSpace,
    updateDate,
}: RestAreaParkingInformationProps) => {
    return (
        <RestAreaDetailSection
            title="주차 공간"
            icon={ParkingSpaceIcon}
            description={`${totalSpace}대 주차 가능`}
        >
            <S.CardGroup row gap={12}>
                <S.Card gap={20}>
                    <Text color={theme.color.blk[60]} typography="bodyMedium16">
                        소형
                    </Text>
                    <Text
                        color={theme.color.blk[100]}
                        typography="headingBold18"
                    >
                        {smallCarSpace}대
                    </Text>
                </S.Card>
                <S.Card gap={20}>
                    <Text color={theme.color.blk[60]} typography="bodyMedium16">
                        대형
                    </Text>
                    <Text
                        color={theme.color.blk[100]}
                        typography="headingBold18"
                    >
                        {largeCarSpace}대
                    </Text>
                </S.Card>
                <S.Card gap={20}>
                    <Text color={theme.color.blk[60]} typography="bodyMedium16">
                        장애인
                    </Text>
                    <Text
                        color={theme.color.blk[100]}
                        typography="headingBold18"
                    >
                        {disabledPersonSpace}대
                    </Text>
                </S.Card>
            </S.CardGroup>
            <S.UpdateNotice gap={8}>
                <Text
                    typography="smallTextMedium12"
                    color={theme.color.blk[30]}
                >
                    {dayjs(updateDate).format('YYYY.MM.DD')} 업데이트
                </Text>
                <Text
                    typography="smallTextMedium12"
                    color={theme.color.blk[30]}
                >
                    본 정보는 특정 시점에 수집되어 실제와 다를 수 있습니다.
                </Text>
            </S.UpdateNotice>
        </RestAreaDetailSection>
    );
};
