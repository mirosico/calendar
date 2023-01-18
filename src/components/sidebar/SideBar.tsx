import React from 'react';
import { StyledSidebar } from './styles';
import { Filter as IFilter } from '../../constants';
import { Filter } from '../filters/Filter';

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
