import React, { createContext, ReactNode, useCallback, useState } from 'react';
import { ModalDialog } from '../components/common';

const ModalContext = createContext({ setModal: (modal: ReactNode) => {}, unSetModal: () => {} });

const Modal = ({ modal, unSetModal }: { modal: ReactNode; unSetModal: () => void }) => {
    return <ModalDialog onClose={unSetModal} children={modal} />;
};

const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modal, setModal] = useState<React.ReactNode>(null);
    const unSetModal = useCallback(() => {
        setModal(null);
    }, [setModal]);

    return (
        <ModalContext.Provider value={{ unSetModal, setModal }}>
            {children}
            {modal && <Modal modal={modal} unSetModal={unSetModal} />}
        </ModalContext.Provider>
    );
};

const useModal = () => {
    const context = React.useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a UserProvider');
    }

    return context;
};

export { ModalProvider, useModal };
