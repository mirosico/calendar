import React from 'react';
import { ModalProvider } from './context/modal-context';
import { Calendar } from './components/calendar/Calendar';

function App() {
    return (
        <ModalProvider>
            <Calendar />
        </ModalProvider>
    );
}

export default App;
