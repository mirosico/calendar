import React from 'react';
import { Holiday } from './Holiday';
import { Event } from '../../constants';

interface HolidayListProps {
    holidays: Event[];
}
export const HolidayList: React.FC<HolidayListProps> = ({ holidays }) => {
    return (
        <>
            {holidays.map((holiday) => (
                <Holiday key={holiday.id} holiday={holiday} />
            ))}
        </>
    );
};
