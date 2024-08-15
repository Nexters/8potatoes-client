import { useRef } from 'react';

import { Outlet } from 'react-router-dom';

import DotIcon from '#/assets/icons/dot.svg?react';
import { TabHeader } from '#/components/tab-header';
import useIntersectionObserver from '#/hooks/useIntersectionObserver';

const restInformation = {
    title: '천안 삼거리 휴게소',
    direction: '서울',
    isWorking: true,
    endTime: '24:00',
    ranking: 4.2,
};

const tabTitles = [
    { title: '먹거리', url: '/rest-area/foods' },
    {
        title: (
            <>
                주유 <DotIcon /> 주차
            </>
        ),
        url: '/rest-area/fuel-parking',
    },
    { title: '기타정보', url: '/rest-area/other-information' },
];

export function RestAreaDetail() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const tabHeaderRef = useRef<HTMLDivElement>(null);

    return (
        <div style={{ height: '100dvh' }} ref={containerRef}>
            <TabHeader
                ref={tabHeaderRef}
                headerInformation={restInformation}
                tabTitles={tabTitles}
                isMinSize={false}
            />
            <div ref={contentRef} style={{ height: '200dvh' }}>
                <Outlet />
            </div>
        </div>
    );
}
