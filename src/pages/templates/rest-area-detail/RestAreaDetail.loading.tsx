import { RefObject, useEffect, useRef, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { TabHeaderLoading } from '#/components/tab-header';

import * as S from './RestAreaDetail.style';

export type RestAreaDetailOutletContextType = {
    headerRef: RefObject<HTMLDivElement>;
    contentRef: RefObject<HTMLDivElement>;
};

export function RestAreaDetailLoading() {
    const contentRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const [isMinHeader, setIsMinHeader] = useState(false);

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
            <TabHeaderLoading />
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
