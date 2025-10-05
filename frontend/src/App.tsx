import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './pages/AppRoutes'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';

function App() {
    return (
        <MantineProvider>
            <Notifications />
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App
