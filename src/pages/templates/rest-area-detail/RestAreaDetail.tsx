import { useRef, useState } from 'react';

import { Outlet } from 'react-router-dom';

import DotIcon from '#/assets/icons/dot.svg?react';
import { TabHeader } from '#/components/tab-header';
import useIntersectionObserver from '#/hooks/useIntersectionObserver';
import { useGetRestAreaBaseInfo } from '#/query-hooks/rest-area/query';

const tabTitles = [
    { title: '먹거리', url: 'foods' },
    {
        title: (
            <>
                주유 <DotIcon /> 주차
            </>
        ),
        url: 'fuel-parking',
    },
    { title: '기타정보', url: 'other-information' },
];

export function RestAreaDetail() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tabHeaderRef = useRef<HTMLDivElement>(null);

    const [isMinHeader, setIsMinHeader] = useState(false);

    const { data: restInformation } = useGetRestAreaBaseInfo();

    const { targetRef: contentRef } = useIntersectionObserver<HTMLDivElement>({
        onIntersect: (isIntersect) => setIsMinHeader(isIntersect),
        enabled: true,
        rootMargin: `0px 0px ${-((containerRef.current?.offsetHeight ?? 0) - (tabHeaderRef.current?.offsetHeight ?? 0) + 1)}px 0px`,
    });

    return (
        <div ref={containerRef}>
            <TabHeader
                ref={tabHeaderRef}
                headerInformation={restInformation}
                tabTitles={tabTitles}
                isMinSize={isMinHeader}
            />
            <div ref={contentRef}>
                <Outlet />
            </div>
        </div>
    );
}
