import React from 'react';
import { StyledModalDialog } from './styles';

interface ModalDialogProps {
    children: React.ReactNode;
    onClose: () => void;
    title?: string;
}

export const ModalDialog: React.FC<ModalDialogProps> = ({ children, title, onClose }) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    return (
        <StyledModalDialog onKeyUp={handleKeyDown}>
            <div className="modal-dialog">
                <header>
                    <h2>{title}</h2>
                    <button className="close" onClick={onClose}>
                        X
                    </button>
                </header>
                <main>{children}</main>
            </div>
        </StyledModalDialog>
    );
};
