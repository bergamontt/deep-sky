import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './pages/AppRoutes'
import '@mantine/core/styles.css';

function App() {
    return (
        <MantineProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App
