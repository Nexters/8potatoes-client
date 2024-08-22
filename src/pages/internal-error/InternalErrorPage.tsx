import { useNavigate } from 'react-router-dom';

import { ErrorBox } from '#/components/error-box';
import { Text } from '#/components/text';
import { MobileView } from '#/pages/templates/mobile-view';
import { theme } from '#/styles/theme';

import * as S from './InternalErrorPage.style';

export const InternalErrorPage = () => {
    const navigate = useNavigate();

    const handleBackPreviousPage = () => {
        navigate(-1);
    };

    return (
        <MobileView>
            <S.Container>
                <ErrorBox>
                    <S.PreviousButton onClick={handleBackPreviousPage}>
                        <Text
                            color={theme.color.wht[100]}
                            typography="buttonBold16"
                        >
                            뒤로 가기
                        </Text>
                    </S.PreviousButton>
                </ErrorBox>
            </S.Container>
        </MobileView>
    );
};
