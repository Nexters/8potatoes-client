import * as S from './SearchTip.style';

const TIP_CONTENTS = [
    {
        title: '도로명 + 건물번호',
        description: '예) 판교역로 235, 제주 첨단로 242',
    },
    {
        title: '지역명(동/리) + 번지',
        description: '예) 삼평동 681, 제주 양평동 2181',
    },
    {
        title: '지역명(동/리) + 건물명(아파트명)',
        description: '예) 분당 주공, 연수동 주공3차',
    },
];

export function SearchTip() {
    return (
        <>
            <S.Header>
                <S.TipHighlight>Tip</S.TipHighlight>{' '}
                <span>이렇게 검색해보세요.</span>
            </S.Header>

            {TIP_CONTENTS.map((tip, idx) => (
                <S.TipContent key={idx}>
                    <S.TipTitle>{tip.title}</S.TipTitle>
                    <S.TipDescription>{tip.description}</S.TipDescription>
                </S.TipContent>
            ))}
        </>
    );
}
