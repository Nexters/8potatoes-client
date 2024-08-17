export interface RestAreaMenuDataType {
    representativeMenuData: RepresentativeMenuDataType[]; // 대표 메뉴 데이터 (최대 2개)
    totalMenuCount: number; // 전체 메뉴 개수
    recommendedMenuData: MenuDataType[]; // 추천 메뉴 데이터 리스트
    normalMenuData: MenuDataType[]; // 일반 메뉴 데이터 리스트
}

export interface MenuDataType {
    menuName: string; // 메뉴 이름
    menuPrice: number; // 메뉴 가격
    isSignatureMenu: boolean; // 시그니처 메뉴 여부
    isPopularMenu: boolean; // 인기 메뉴 여부
    menuCategory: MenuCategoryType; // 메뉴 카테고리
}

export interface RepresentativeMenuDataType {
    representativeMenuName: string; // 대표 메뉴 이름
    representativeMenuPrice: number; // 대표 메뉴 가격
    representativeMenuImageUrl: string; // 대표 메뉴 이미지
    representativeMenuDescription: string; // 대표 메뉴 설명
}

export type MenuCategoryType =
    | '스낵'
    | '한식'
    | '양식'
    | '중식'
    | '아시안';
