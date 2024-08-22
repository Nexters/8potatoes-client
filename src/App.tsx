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
        </div>
    );
}

export default App;
