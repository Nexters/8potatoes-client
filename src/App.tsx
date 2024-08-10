import { RestAreaInformation } from '#/features/rest-area/rest-area-information';

import { Drawer } from './components/drawer';
import { Text } from './components/text/Text';
import { RestAreaOtherInformation } from './features/rest-area/rest-area-other-information';
import { theme } from './styles/theme';

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

            <RestAreaOtherInformation />
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
