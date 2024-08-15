import { RestAreaInformation } from '#/features/rest-area/rest-area-information';

import { Text } from './components/text/Text';
import { theme } from './styles/theme';

function App() {
    return (
        <div style={{ height: '100dvh' }}>
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
        </div>
    );
}

export default App;
