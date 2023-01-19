import React from 'react';
import { Filter } from '../filters/Filter';
import { StyledSidebar } from './styles';

import { Filter as IFilter } from '../../constants';

interface SideBarProps {
    filter: IFilter;
}

export const SideBar: React.FC<SideBarProps> = ({ filter }) => {
    return (
        <StyledSidebar>
            <Filter filter={filter} />
        </StyledSidebar>
    );
};
