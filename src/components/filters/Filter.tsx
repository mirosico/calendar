import React from 'react';
import TextField from '@mui/material/TextField';
import { CheckBoxes } from './CheckBoxes';
import { StyledFilter } from './styles';

import { Filter as IFilter } from '../../constants';

interface FilterProps {
    filter: IFilter;
}
export const Filter: React.FC<FilterProps> = ({ filter: { checkBoxes, filter, setFilter, setCheckBoxes } }) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    return (
        <StyledFilter>
            <h4>Search & filter</h4>
            <TextField
                placeholder="Search event"
                value={filter}
                onChange={handleSearchChange}
                label="Search event"
                variant="outlined"
            />
            <CheckBoxes checkBoxes={checkBoxes} setCheckBoxes={setCheckBoxes} />
        </StyledFilter>
    );
};
