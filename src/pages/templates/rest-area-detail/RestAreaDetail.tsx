import { useEffect, useRef, useState } from 'react';

import { Outlet } from 'react-router-dom';

import DotIcon from '#/assets/icons/dot.svg?react';
import { TabHeader } from '#/components/tab-header';
import { useGetRestAreaBaseInfo } from '#/query-hooks/rest-area/query';

import * as S from './RestAreaDetail.style';

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
    const [isMinHeader, setIsMinHeader] = useState(false);

    const { data: restInformation } = useGetRestAreaBaseInfo();

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current) {
            return;
        }

        const handleScroll = () => {
            if (!contentRef.current) {
                return;
            }
            const scrollTop = contentRef.current.scrollTop;
            setIsMinHeader(scrollTop > 30);
        };

        contentRef.current.addEventListener('scroll', handleScroll);

        return () => {
            if (contentRef.current) {
                contentRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [contentRef]);

    return (
        <div>
            <TabHeader
                headerInformation={restInformation}
                tabTitles={tabTitles}
                isMinSize={isMinHeader}
            />
            <S.Contents
                ref={contentRef}
                animate={{
                    paddingTop: isMinHeader ? '64px' : '214px',
                }}
            >
                <Outlet />
            </S.Contents>
        </div>
    );
}
