import { RestAreaInformation } from '#/features/rest-area/rest-area-information';

import { Drawer } from './components/drawer';
import { Text } from './components/text/Text';
import { RestAreaOtherInformation } from './features/rest-area/rest-area-other-information';
import { theme } from './styles/theme';

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
    return (
        <>
            <Drawer>
                <Drawer.Trigger>
                    <button>Trigger Drawer</button>
                </Drawer.Trigger>
                <Drawer.Content
                    heightStepList={[
                        { value: 80, unit: 'px' },
                        { value: 50, unit: 'dvh' },
                        { value: 90, unit: 'dvh' },
                    ]}
                >
                    <h1>test Text</h1>
                    <Drawer.Close>
                        <button>close button</button>
                    </Drawer.Close>
                </Drawer.Content>
            </Drawer>

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
            />
        </>
    );
}

export default App;
