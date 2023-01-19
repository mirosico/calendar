import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, FormControl, FormLabel } from '@mui/material';
import { Label } from '../labels';
import { StyledCheckBoxes } from './styles';

import { CheckBox } from '../../constants';

interface CheckBoxesProps {
    checkBoxes: CheckBox[];
    setCheckBoxes: (checkBoxes: CheckBox[]) => void;
}

export const CheckBoxes: React.FC<CheckBoxesProps> = ({ checkBoxes, setCheckBoxes }) => {
    const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCheckBoxes = checkBoxes.map((checkBox) => {
            if (checkBox.name === event.target.name) {
                return {
                    ...checkBox,
                    checked: event.target.checked,
                };
            }
            return checkBox;
        });
        setCheckBoxes(newCheckBoxes);
    };

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        const newCheckBoxes = checkBoxes.map((checkBox) => {
            return {
                ...checkBox,
                checked,
            };
        });
        setCheckBoxes(newCheckBoxes);
    };

    const isAllChecked = checkBoxes.every((checkbox) => checkbox.checked);

    return (
        <StyledCheckBoxes>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Filter by labels</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        key="select-all"
                        control={<Checkbox name="select-all" checked={isAllChecked} onChange={handleSelectAll} />}
                        label="Select All"
                    />
                    {checkBoxes.map((checkBox) => (
                        <FormControlLabel
                            key={checkBox.name}
                            control={
                                <Checkbox
                                    name={checkBox.name}
                                    checked={checkBox.checked}
                                    onChange={handleCheckBoxChange}
                                />
                            }
                            label={<Label label={checkBox} />}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </StyledCheckBoxes>
    );
};
