import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';
import dayjs from '#/utils/dayjs';

import * as S from './RestAreaParkingInformation.style';

interface RestAreaParkingInformationProps {
    smallSizeParking?: number;
    largeSizeParking?: number;
    disabledOnlyParking?: number;
    updatedInformationAt: Date;
}

export const RestAreaParkingInformation = ({
    smallSizeParking,
    largeSizeParking,
    disabledOnlyParking,
    updatedInformationAt,
}: RestAreaParkingInformationProps) => {
    const leftAvailableParking = [
        smallSizeParking,
        largeSizeParking,
        disabledOnlyParking,
    ].reduce<number>((total, current) => total + (current ?? 0), 0);

    return (
        <S.Section gap={32}>
            <FlexBox row flexOption={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <S.Title row gap={12}>
                    <img
                        alt="주차 공간 표시 아이콘"
                        src=""
                        width={24}
                        height={24}
                    />
                    <Text
                        typography="headingBold20"
                        color={theme.color.blk[100]}
                    >
                        주차 공간
                    </Text>
                </S.Title>
                <Text color={theme.color.blk[40]} typography="bodySemiBold14">
                    {leftAvailableParking}대 주차 가능
                </Text>
            </FlexBox>
            <S.CardGroup row gap={12}>
                {smallSizeParking && (
                    <S.Card gap={20}>
                        <Text
                            color={theme.color.blk[60]}
                            typography="bodyMedium16"
                        >
                            소형
                        </Text>
                        <Text
                            color={theme.color.blk[100]}
                            typography="headingBold18"
                        >
                            {smallSizeParking}대
                        </Text>
                    </S.Card>
                )}
                {largeSizeParking && (
                    <S.Card gap={20}>
                        <Text
                            color={theme.color.blk[60]}
                            typography="bodyMedium16"
                        >
                            대형
                        </Text>
                        <Text
                            color={theme.color.blk[100]}
                            typography="headingBold18"
                        >
                            {largeSizeParking}대
                        </Text>
                    </S.Card>
                )}
                {disabledOnlyParking && (
                    <S.Card gap={20}>
                        <Text
                            color={theme.color.blk[60]}
                            typography="bodyMedium16"
                        >
                            장애인
                        </Text>
                        <Text
                            color={theme.color.blk[100]}
                            typography="headingBold18"
                        >
                            {disabledOnlyParking}대
                        </Text>
                    </S.Card>
                )}
            </S.CardGroup>
            <S.UpdateNotice gap={8}>
                <Text
                    typography="smallTextMedium12"
                    color={theme.color.blk[30]}
                >
                    {dayjs(updatedInformationAt).format('YYYY.MM.DD')} 업데이트
                </Text>
                <Text
                    typography="smallTextMedium12"
                    color={theme.color.blk[30]}
                >
                    본 정보는 특정 시점에 수집되어 실제와 다를 수 있습니다.
                </Text>
            </S.UpdateNotice>
        </S.Section>
    );
};
