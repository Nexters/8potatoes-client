import LocationIcon from '#/assets/icons/location.svg?react';
import { theme } from '#/styles/theme';
import {
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
        const textArr = text.split(new RegExp(`(${keyword})`, 'gi'));
        return textArr.map((_text, idx) =>
            _text.toLowerCase() === keyword.toLowerCase() ? (
                <S.Highlight key={idx}>{_text}</S.Highlight>
            ) : (
                _text
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
            lat: parseInt(noorLat),
            lon: parseInt(noorLon),
            addressName: name,
        };

        onSelect(selectedLocation);
    };

    return (
        <S.Container onClick={() => handleSelectLocation(location)}>
            <LocationIcon width={24} height={24} fill={theme.color.main[30]} />
            <S.Contents>
                <S.LocationName>
                    {getHighlightedText(location.name ?? '', searchInput)}
                </S.LocationName>
                <S.Addresses>
                    {roadAddress && (
                        <S.AddressContainer>
                            <S.Tag>도로명</S.Tag>
                            <S.Address>
                                {getHighlightedText(roadAddress, searchInput)}
                            </S.Address>
                        </S.AddressContainer>
                    )}

                    <S.AddressContainer>
                        <S.Tag>지번</S.Tag>
                        <S.Address>
                            {getHighlightedText(
                                getLotNumberAddress(location),
                                searchInput,
                            )}
                        </S.Address>
                    </S.AddressContainer>
                </S.Addresses>
            </S.Contents>
        </S.Container>
    );
}
