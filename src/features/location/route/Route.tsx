import { Dispatch } from 'react';

import { useNavigate } from 'react-router-dom';

import ArrowSwitchHorizontalIcon from '#/assets/icons/arrow-switch-horizontal.svg?react';
import LocationIcon from '#/assets/icons/location.svg?react';
import OriginIcon from '#/assets/icons/origin.svg?react';
import { Button } from '#/components/button';
import { Drawer } from '#/components/drawer';
import { Header } from '#/components/header';
import { Text } from '#/components/text';
import { SEARCH_OPTION } from '#/constants/location';
import { LocationSelectField } from '#/features/location/location-select-field';
import { theme } from '#/styles/theme';
import type { SearchOptionType, SelectedLocationType } from '#/types/location';

import * as S from './Route.style';

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
    const navigate = useNavigate();

    const isSelectedOrigin = !!routeLocation.origin;
    const isSelectedDestination = !!routeLocation.destination;
    const isSelectEnd = isSelectedOrigin && isSelectedDestination;

    const handleClickSearchOption = (selectedOption: SearchOptionType) => {
        setSearchOption(selectedOption);
    };

    const handleSwitchLocation = () => {
        if (!routeLocation.origin || !routeLocation.destination) {
            return;
        }

        const origin: SelectedLocationType = {
            ...routeLocation.origin,
        };
        const destination: SelectedLocationType = {
            ...routeLocation.destination,
        };

        setRouteLocation({ origin: destination, destination: origin });
    };

    const handleClickSearch = () => {
        console.log(routeLocation);
        navigate('/map', { state: routeLocation });
    };

    return (
        <>
            <Header title="로고" />

            <S.Container>
                <img src="" style={{ width: '100%', height: '327px' }} />

                <S.Contents>
                    <Text
                        typography="headingBold24"
                        color={theme.color.blk[100]}
                    >
                        쥬쥬와 함께
                        <br />
                        휴게소 맛집을 찾아보세요!
                    </Text>

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

                    <S.CTABottomSection>
                        <Button
                            isValid={isSelectEnd}
                            onClick={handleClickSearch}
                        >
                            휴게소 찾기
                        </Button>
                    </S.CTABottomSection>
                </S.Contents>
            </S.Container>
        </>
    );
}
