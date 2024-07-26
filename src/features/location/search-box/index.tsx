import { LocationInformationType } from '#/types/location';

import * as S from './index.style';

interface SearchBoxPropsType {
    location: LocationInformationType;
    searchInput: string;
    onSelect: (location: LocationInformationType) => void;
}

const LOCATION_TYPE = {
    ROAD: '도로명',
    LOT: '지번',
};

function SearchBox({ location, searchInput, onSelect }: SearchBoxPropsType) {
    const locationType =
        location.newAddressList.newAddress.length >= 1
            ? LOCATION_TYPE.ROAD
            : LOCATION_TYPE.LOT;
    const address =
        locationType === LOCATION_TYPE.ROAD
            ? location.newAddressList.newAddress[0].fullAddressRoad
            : location.name;

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

    return (
        <S.Container onClick={() => onSelect(location)}>
            <S.LocationName>
                {getHighlightedText(location.name ?? '', searchInput)}
            </S.LocationName>
            <S.AddressContainer>
                <S.Tag>{locationType}</S.Tag>
                <S.Address>
                    {getHighlightedText(address ?? '', searchInput)}
                </S.Address>
            </S.AddressContainer>
        </S.Container>
    );
}

export default SearchBox;
