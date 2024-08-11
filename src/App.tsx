import { useEffect, useRef, useState } from 'react';

import DotIcon from '#/assets/icons/dot.svg?react';
import { RestAreaInformation } from '#/features/rest-area/rest-area-information';

import { Drawer } from './components/drawer';
import { TabHeader } from './components/tab-header';
import { Text } from './components/text/Text';
import { RestAreaOtherInformation } from './features/rest-area/rest-area-other-information';
import { theme } from './styles/theme';

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

const data = {
    workingHours: [
        {
            title: '식당가 (라면/우동)',
            hour: '07:00 - 23:00',
        },
        {
            title: '식당가 (한식)',
            hour: '07:00 - 23:30',
        },
    ],
    brands: [
        {
            title: 'BBQ',
            img: 'src',
        },
        {
            title: '파리바게뜨',
            img: 'src',
        },
        {
            title: '코바코',
            img: 'src',
        },
        {
            title: '뚜레쥬르',
            img: 'src',
        },
        {
            title: 'BHC',
            img: 'src',
        },
    ],
    amenities: [
        {
            title: '내고장특산물',
            img: 'src',
        },
        {
            title: '세차장',
            img: 'src',
        },
        {
            title: '약국',
            img: 'src',
        },
        {
            title: '수유실',
            img: 'src',
        },
        {
            title: '화장실',
            img: 'src',
        },
    ],
    address: '충남 천안시 동남구 쉼1길 42',
    cellphone: '041-551-2480',
};

function App() {
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
            <div
                ref={contentRef}
                style={{ height: '200dvh', overflow: 'scroll' }}
            >
                hih
            </div>

            {/* <Text
        <>
            <RestAreaOtherInformation otherInformation={data} />
            <Text
                as="h1"
                color={theme.color.main[100]}
                typography="headingBold20"
            >
                테스트 메세지
            </Text>
            <RestAreaInformation
                restAreaName="서울만남의광장"
                direction="부산"
                naverRating={4.1}
                gasolinePrice={1600}
                dieselPrice={1100}
                menuAmount={17}
                openDate={new Date('2024-08-07')}
                closeDate={new Date('2024-08-08')}
            /> */}
        </div>
    );
}

export default App;
