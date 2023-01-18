import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';
import { StyledColorPicker, StyledCreateLabel } from './styles';
import { Label } from '../../constants';

interface CreateLabelProps {
    label: Label;
    setLabel: React.Dispatch<React.SetStateAction<Label>>;
    handleAddLabel: () => void;
}

export const defaultLabel: Label = {
    id: '',
    name: '',
    color: '#333',
};

export const CreateLabel: React.FC<CreateLabelProps> = ({ label, setLabel, handleAddLabel }) => {
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleLabelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLabel({ ...label, name: e.target.value });
    };

    const handleColorChange = (color: any) => {
        setLabel({ ...label, color: color.hex });
        setShowColorPicker(false);
    };

    const handleColorButtonClick = () => {
        setShowColorPicker(!showColorPicker);
    };

    const handleEscape = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            e.stopPropagation();
            e.preventDefault();
            setShowColorPicker(false);
        }
    };

    return (
        <StyledCreateLabel onKeyUp={handleEscape}>
            <input type="text" value={label.name} onChange={handleLabelInputChange} placeholder={'Enter label name'} />
            <StyledColorPicker color={label.color}>
                <button className="color-picker-button" onClick={handleColorButtonClick} />
                {showColorPicker && (
                    <div className="color-picker-window">
                        <TwitterPicker color={label.color} onChange={handleColorChange} />
                    </div>
                )}
            </StyledColorPicker>
            <button onClick={handleAddLabel}>Add label</button>
        </StyledCreateLabel>
    );
};
