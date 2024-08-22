import { FlexBox } from '#/components/flex-box';
import { Text } from '#/components/text';
import { MobileView } from '#/pages/templates/mobile-view';
import { theme } from '#/styles/theme';

import * as S from './NotFoundPage.style';

export const NotFoundPage = () => (
    <MobileView>
        <S.Container>
            <FlexBox gap={8} flexOption={{ alignContent: 'center' }}>
                <img
                    src="https://hyusik-matju-bucket.s3.ap-northeast-2.amazonaws.com/assets/not-found.png"
                    alt="not_found"
                />
                <Text typography="bodyMedium16" color={theme.color.blk[40]}>
                    찾을 수 없는 페이지 입니다.
                </Text>
            </FlexBox>
        </S.Container>
    </MobileView>
);
