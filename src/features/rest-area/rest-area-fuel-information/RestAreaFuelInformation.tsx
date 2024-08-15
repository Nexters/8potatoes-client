import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';

import { RestAreaDetailSection } from '../rest-area-detail-section';

import * as S from './RestAreaFuelInformation.style';

interface RestAreaFuelInformationProps {
    gasolinePrice?: string;
    dieselPrice?: string;
    lpgPrice?: string;
    isElectricChargingStation?: boolean;
    isHydrogenChargingStation?: boolean;
}

export const RestAreaFuelInformation = ({
    gasolinePrice,
    dieselPrice,
    lpgPrice,
    isElectricChargingStation,
    isHydrogenChargingStation,
}: RestAreaFuelInformationProps) => {
    const hasNoFuelInfo = !gasolinePrice && !dieselPrice && !lpgPrice;

    return (
        <RestAreaDetailSection title="주유 및 충전" iconSrc="" iconAlt="">
            {hasNoFuelInfo ? (
                <FlexBox gap={20} flexOption={{ alignItems: 'center' }}>
                    <img src="" width={120} height={120} />
                    <Text typography="bodyBold16" color={theme.color.blk[40]}>
                        해당 휴게소의 주유소 정보가 없습니다.
                    </Text>
                </FlexBox>
            ) : (
                <>
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
                                    {gasolinePrice}
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
                                    {dieselPrice}
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
                                    {lpgPrice}
                                </Text>
                            </S.Card>
                        )}
                    </S.CardGroup>
                    <FlexBox gap={20}>
                        <S.AvailableChargeOption row gap={12}>
                            <Text
                                color={theme.color.blk[60]}
                                typography="bodyMedium16"
                            >
                                전기차 충전
                            </Text>
                            <S.DashedLine />
                            <Text
                                color={theme.color.blk[100]}
                                typography="bodySemiBold16"
                            >
                                {isElectricChargingStation ? '가능' : '불가능'}
                            </Text>
                        </S.AvailableChargeOption>
                        <S.AvailableChargeOption row gap={12}>
                            <Text
                                color={theme.color.blk[60]}
                                typography="bodyMedium16"
                            >
                                수소차 충전
                            </Text>
                            <S.DashedLine />
                            <Text
                                color={theme.color.blk[100]}
                                typography="bodySemiBold16"
                            >
                                {isHydrogenChargingStation ? '가능' : '불가능'}
                            </Text>
                        </S.AvailableChargeOption>
                    </FlexBox>
                </>
            )}
        </RestAreaDetailSection>
    );
};
