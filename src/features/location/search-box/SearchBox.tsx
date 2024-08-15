import LocationIcon from '#/assets/icons/location.svg?react';
import { Text } from '#/components/text';
import { theme } from '#/styles/theme';
import type {
    LocationInformationType,
    SelectedLocationType,
} from '#/types/location';

import * as S from './SearchBox.style';

interface SearchBoxPropsType {
    location: LocationInformationType;
    searchInput: string;
    onSelect: (location: SelectedLocationType) => void;
}

const DEFAULT_LOT_NUMBER = '0';

export function SearchBox({
    location,
    searchInput,
    onSelect,
}: SearchBoxPropsType) {
    const roadAddress =
        location.newAddressList.newAddress.length >= 1
            ? location.newAddressList.newAddress[0].fullAddressRoad
            : undefined;

    const getHighlightedText = (text: string, keyword: string) => {
        const splitText = text.split(new RegExp(`(${keyword})`, 'gi'));
        return splitText.map((part, idx) =>
            part.toLowerCase() === keyword.toLowerCase() ? (
                <S.Highlight key={idx}>{part}</S.Highlight>
            ) : (
                part
            ),
        );
    };

    const getLotNumberAddress = (location: LocationInformationType) => {
        const {
            upperAddrName = '',
            middleAddrName = '',
            lowerAddrName = '',
            detailAddrName = '',
            firstNo = DEFAULT_LOT_NUMBER,
            secondNo = DEFAULT_LOT_NUMBER,
        } = location;

        const locationFirstNumber =
            firstNo === DEFAULT_LOT_NUMBER ? '' : firstNo;
        const locationSecondNumber =
            secondNo === DEFAULT_LOT_NUMBER ? '' : secondNo;
        const locationNumber =
            locationFirstNumber +
            (locationSecondNumber ? `-${locationSecondNumber}` : '');

        const addressParts = [
            upperAddrName,
            middleAddrName,
            lowerAddrName,
            detailAddrName,
            locationNumber,
        ];

        return addressParts.filter(Boolean).join(' ');
    };

    const handleSelectLocation = (location: LocationInformationType) => {
        const { noorLat = '', noorLon = '', name = '' } = location;
        const selectedLocation = {
            lat: Number(noorLat),
            lon: Number(noorLon),
            addressName: name,
        };

        onSelect(selectedLocation);
    };

    return (
        <S.Container onClick={() => handleSelectLocation(location)}>
            <LocationIcon width={24} height={24} fill={theme.color.main[30]} />
            <S.Contents>
                <Text typography="bodyBold16" color={theme.color.blk[100]}>
                    {getHighlightedText(location.name ?? '', searchInput)}
                </Text>
                <S.Addresses>
                    {roadAddress && (
                        <S.AddressContainer>
                            <S.Tag
                                typography="bodyMedium14"
                                color={theme.color.blk[60]}
                            >
                                도로명
                            </S.Tag>
                            <Text
                                typography="bodyMedium14"
                                color={theme.color.blk[60]}
                            >
                                {getHighlightedText(roadAddress, searchInput)}
                            </Text>
                        </S.AddressContainer>
                    )}

                    <S.AddressContainer>
                        <S.Tag
                            typography="bodyMedium14"
                            color={theme.color.blk[60]}
                        >
                            지번
                        </S.Tag>
                        <Text
                            typography="bodyMedium14"
                            color={theme.color.blk[60]}
                        >
                            {getHighlightedText(
                                getLotNumberAddress(location),
                                searchInput,
                            )}
                        </Text>
                    </S.AddressContainer>
                </S.Addresses>
            </S.Contents>
        </S.Container>
    );
}
