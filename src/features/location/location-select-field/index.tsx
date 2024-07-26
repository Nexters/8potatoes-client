import * as S from './index.style';

interface LocationSelectFieldProps {
    handleClick: () => void;
    label: string;
    placeholder: string;
    isSelected: boolean;
    locationName: string | undefined;
}

function LocationSelectField({
    handleClick,
    label,
    placeholder,
    isSelected,
    locationName,
}: LocationSelectFieldProps) {
    return (
        <div onClick={handleClick}>
            <S.InputLabel>
                {label}
                <S.InputRequired> *</S.InputRequired>
            </S.InputLabel>

            <S.SelectField>
                {isSelected ? (
                    <S.SelectedLocation>{locationName}</S.SelectedLocation>
                ) : (
                    <S.UnSelectedLocation>{placeholder}</S.UnSelectedLocation>
                )}
            </S.SelectField>
        </div>
    );
}

export default LocationSelectField;
