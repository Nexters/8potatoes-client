import { Text } from '#/components/text';
import { theme } from '#/styles/theme';

import * as S from './LocationSelectField.style';

interface LocationSelectFieldProps {
    handleClick: () => void;
    label: string;
    placeholder: string;
    isSelected: boolean;
    locationName: string | undefined;
}

export function LocationSelectField({
    handleClick,
    label,
    placeholder,
    isSelected,
    locationName,
}: LocationSelectFieldProps) {
    return (
        <S.Container onClick={handleClick}>
            <Text typography="bodyMedium14" color={theme.color.blk[30]}>
                {label}{' '}
                <Text
                    as="span"
                    typography="bodyMedium14"
                    color={theme.color.error[100]}
                >
                    *
                </Text>
            </Text>

            {isSelected ? (
                <Text typography="bodySemiBold18" color={theme.color.blk[100]}>
                    {locationName}
                </Text>
            ) : (
                <Text typography="bodySemiBold18" color={theme.color.blk[40]}>
                    {placeholder}
                </Text>
            )}
        </S.Container>
    );
}
