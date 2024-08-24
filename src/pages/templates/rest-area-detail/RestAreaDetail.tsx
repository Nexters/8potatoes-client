import { RefObject, useEffect, useRef, useState } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import DotIcon from '#/assets/icons/dot.svg?react';
import { TabHeader, TabHeaderLoading } from '#/components/tab-header';
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

export type RestAreaDetailOutletContextType = {
    headerRef: RefObject<HTMLDivElement>;
    contentRef: RefObject<HTMLDivElement>;
};

export function RestAreaDetail() {
    const contentRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const location = useLocation();
    const [isMinHeader, setIsMinHeader] = useState(false);
    const { data: restInformation } = useGetRestAreaBaseInfo();

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

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, [location]);

    return (
        <div>
            <TabHeader
                ref={headerRef}
                headerInformation={restInformation}
                tabTitles={tabTitles}
                isMinSize={isMinHeader}
            />
            <S.Contents
                ref={contentRef}
                id="tab-content"
                animate={{
                    paddingTop: isMinHeader ? '120px' : '214px',
                }}
            >
                <Outlet
                    context={
                        {
                            headerRef,
                            contentRef,
                        } satisfies RestAreaDetailOutletContextType
                    }
                />
            </S.Contents>
        </div>
    );
}
