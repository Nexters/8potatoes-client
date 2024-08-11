import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';

import * as S from './RestAreaFuelInformation.style';

interface RestAreaFuelInformationProps {
    gasolinePrice?: number;
    dieselPrice?: number;
    lpgPrice?: number;
    isElectricChargeAvailable?: boolean;
    isHydrogenChargeAvailable?: boolean;
}

export const RestAreaFuelInformation = ({
    gasolinePrice,
    dieselPrice,
    lpgPrice,
    isElectricChargeAvailable,
    isHydrogenChargeAvailable,
}: RestAreaFuelInformationProps) => {
    return (
        <S.Section gap={24}>
            <S.Title gap={12} row>
                <img
                    alt="주유 및 충전 표시 아이콘"
                    src=""
                    width={24}
                    height={24}
                />
                <Text typography="headingBold20" color={theme.color.blk[100]}>
                    주유 및 충전
                </Text>
            </S.Title>
            <S.CardGroup row gap={12}>
                {gasolinePrice && (
                    <S.Card gap={20}>
                        <Text
                            color={theme.color.blk[60]}
                            typography="bodyMedium16"
                        >
                            휘발유
                        </Text>
                        <Text
                            color={theme.color.blk[100]}
                            typography="headingBold18"
                        >
                            {`${gasolinePrice.toLocaleString()}원`}
                        </Text>
                    </S.Card>
                )}
                {dieselPrice && (
                    <S.Card gap={20}>
                        <Text
                            color={theme.color.blk[60]}
                            typography="bodyMedium16"
                        >
                            경유
                        </Text>
                        <Text
                            color={theme.color.blk[100]}
                            typography="headingBold18"
                        >
                            {`${dieselPrice.toLocaleString()}원`}
                        </Text>
                    </S.Card>
                )}
                {lpgPrice && (
                    <S.Card gap={20}>
                        <Text
                            color={theme.color.blk[60]}
                            typography="bodyMedium16"
                        >
                            LPG
                        </Text>
                        <Text
                            color={theme.color.blk[100]}
                            typography="headingBold18"
                        >
                            {`${lpgPrice.toLocaleString()}원`}
                        </Text>
                    </S.Card>
                )}
            </S.CardGroup>
            <FlexBox gap={20}>
                <S.AvailableChargeOption row gap={12}>
                    <Text color={theme.color.blk[60]} typography="bodyMedium16">
                        전기차 충전
                    </Text>
                    <S.DashedLine />
                    <Text
                        color={theme.color.blk[100]}
                        typography="bodySemiBold16"
                    >
                        {isElectricChargeAvailable ? '가능' : '불가능'}
                    </Text>
                </S.AvailableChargeOption>
                <S.AvailableChargeOption row gap={12}>
                    <Text color={theme.color.blk[60]} typography="bodyMedium16">
                        수소차 충전
                    </Text>
                    <S.DashedLine />
                    <Text
                        color={theme.color.blk[100]}
                        typography="bodySemiBold16"
                    >
                        {isHydrogenChargeAvailable ? '가능' : '불가능'}
                    </Text>
                </S.AvailableChargeOption>
            </FlexBox>
        </S.Section>
    );
};
