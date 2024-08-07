import { Dispatch } from 'react';

import ArrowSwitchHorizontalIcon from '#/assets/icons/arrow-switch-horizontal.svg?react';
import LocationIcon from '#/assets/icons/location.svg?react';
import OriginIcon from '#/assets/icons/origin.svg?react';
import { BottomSection } from '#/components/bottom-section';
import { Button } from '#/components/button';
import { Drawer } from '#/components/drawer';
import { Header } from '#/components/header';
import { SEARCH_OPTION } from '#/constants/location';
import { LocationSelectField } from '#/features/location/location-select-field';
import { Search } from '#/features/location/search';
import { theme } from '#/styles/theme';
import { SelectedLocationType } from '#/types/location';

import * as S from './Route.style';

type SearchOptionType = (typeof SEARCH_OPTION)[keyof typeof SEARCH_OPTION];

interface RouteProps {
    routeLocation: Record<SearchOptionType, SelectedLocationType | null>;
    setSearchOption: Dispatch<SearchOptionType | null>;
    setRouteLocation: Dispatch<
        Record<SearchOptionType, SelectedLocationType | null>
    >;
}

export function Route({
    routeLocation,
    setSearchOption,
    setRouteLocation,
}: RouteProps) {
    const isSelectedOrigin = !!routeLocation.origin;
    const isSelectedDestination = !!routeLocation.destination;
    const isSelectEnd = isSelectedOrigin && isSelectedDestination;

    const handleClickSearchOption = (selectedOption: SearchOptionType) => {
        setSearchOption(selectedOption);
    };

    const handleSwitchLocation = () => {
        if (!isSelectEnd) {
            return;
        }

        const origin = {
            ...routeLocation.origin,
        } as SelectedLocationType;
        const destination = {
            ...routeLocation.destination,
        } as SelectedLocationType;

        setRouteLocation({ origin: destination, destination: origin });
    };

    const handleClickSearch = () => {
        // TODO: 검색 결과 페이지로 이동
    };

    return (
        <>
            <Header title="로고" />

            <S.Container>
                <img src="" style={{ width: '100%', height: '327px' }} />

                <S.Contents>
                    <S.Title>
                        쥬쥬와 함께
                        <br />
                        휴게소 맛집을 찾아보세요!
                    </S.Title>

                    <S.RouteContainer>
                        <S.RouteIconContainer>
                            <OriginIcon />
                            <S.DottedLine />
                            <LocationIcon
                                fill={theme.color.main[100]}
                                width={24}
                                height={24}
                            />
                        </S.RouteIconContainer>

                        <S.Route>
                            <Drawer.Trigger>
                                <div>
                                    <LocationSelectField
                                        handleClick={() =>
                                            handleClickSearchOption(
                                                SEARCH_OPTION.ORIGIN,
                                            )
                                        }
                                        label="출발지 입력"
                                        placeholder="어디서 출발하세요?"
                                        isSelected={isSelectedOrigin}
                                        locationName={
                                            routeLocation.origin?.addressName
                                        }
                                    />
                                </div>
                            </Drawer.Trigger>

                            <S.BorderLine isFill={isSelectEnd} />

                            <Drawer.Trigger>
                                <div>
                                    <LocationSelectField
                                        handleClick={() =>
                                            handleClickSearchOption(
                                                SEARCH_OPTION.DESTINATION,
                                            )
                                        }
                                        label="도착지 입력"
                                        placeholder="어디까지 가세요?"
                                        isSelected={isSelectedDestination}
                                        locationName={
                                            routeLocation.destination
                                                ?.addressName
                                        }
                                    />
                                </div>
                            </Drawer.Trigger>
                        </S.Route>

                        <button onClick={handleSwitchLocation}>
                            <ArrowSwitchHorizontalIcon
                                stroke={
                                    isSelectEnd
                                        ? theme.color.main[100]
                                        : theme.color.main[30]
                                }
                            />
                        </button>
                    </S.RouteContainer>

                    <BottomSection style={{ padding: '28px 20px' }}>
                        <Button
                            isValid={isSelectEnd}
                            onClick={handleClickSearch}
                        >
                            휴게소 찾기
                        </Button>
                    </BottomSection>
                </S.Contents>
            </S.Container>
        </>
    );
}
