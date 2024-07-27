import {
    LocationInformationType,
    SelectedLocationType,
} from '#/types/location';

import * as S from './index.style';

interface SearchBoxPropsType {
    location: LocationInformationType;
    searchInput: string;
    onSelect: (location: SelectedLocationType) => void;
}

function SearchBox({ location, searchInput, onSelect }: SearchBoxPropsType) {
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
            firstNo = '0',
            secondNo = '0',
        } = location;

        const locationFirstNumber = firstNo === '0' ? '' : firstNo;
        const locationSecondNumber = secondNo === '0' ? '' : secondNo;
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

        return addressParts.join(' ');
    };

    const handleSelectLocation = (location: LocationInformationType) => {
        const selectedLocation = {
            lat: parseInt(location.noorLat ?? ''),
            lon: parseInt(location.noorLon ?? ''),
            addressName: location.name ?? '',
        };

        onSelect(selectedLocation);
    };

    return (
        <S.Container onClick={() => handleSelectLocation(location)}>
            <S.LocationName>
                {getHighlightedText(location.name ?? '', searchInput)}
            </S.LocationName>
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
                <S.Address>{getLotNumberAddress(location)}</S.Address>
            </S.AddressContainer>
        </S.Container>
    );
}

export default SearchBox;
