import { useState } from 'react';

import { Drawer } from './components/drawer';
import { RestAreaOtherInformation } from './features/rest-area/rest-area-other-information';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
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
        </>
    );
}

export default App;
