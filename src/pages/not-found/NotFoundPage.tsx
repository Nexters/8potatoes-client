import { useNavigate } from 'react-router-dom';

import { Text } from '#/components/text';
import { MobileView } from '#/pages/templates/mobile-view';
import { theme } from '#/styles/theme';

import * as S from './NotFoundPage.style';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleBackPreviousPage = () => {
        navigate(-1);
    };

    return (
        <MobileView>
            <S.Container>
                <S.NotFoundSection gap={8}>
                    <img
                        src="https://hyusik-matju-bucket.s3.ap-northeast-2.amazonaws.com/assets/not-found.png"
                        alt="not_found"
                    />
                    <Text typography="bodyMedium16" color={theme.color.blk[40]}>
                        유효하지 않은 페이지 입니다.
                    </Text>
                    <S.PreviousButton onClick={handleBackPreviousPage}>
                        <Text
                            color={theme.color.wht[100]}
                            typography="buttonBold16"
                        >
                            뒤로 가기
                        </Text>
                    </S.PreviousButton>
                </S.NotFoundSection>
            </S.Container>
        </MobileView>
    );
};
