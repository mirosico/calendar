import React, { useRef } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { StyledCalendarHeader } from './styles';
import { getMonthName } from '../../utils';
import { useSaveAsImage } from '../../hooks';
import { MonthYear } from '../../constants';

interface CalendarHeaderProps {
    currentMonthYear: MonthYear;
    setCurrentMonthYear: (monthYear: MonthYear) => void;
    exportEventsToJSON: () => void;
    importEventsFromJSON: (file: File) => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
    currentMonthYear,
    setCurrentMonthYear,
    exportEventsToJSON,
    importEventsFromJSON,
}) => {
    const hiddenInput = useRef<null | HTMLInputElement>(null);
    const saveCalendarImage = useSaveAsImage();

    const { month, year } = currentMonthYear;

    const monthName = getMonthName(month);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            importFile(e.target.files[0]);
        }
    };

    const importFile = (file: File | null) => {
        if (file) {
            importEventsFromJSON(file);
        }
    };

    const handleImport = () => {
        hiddenInput.current?.click();
    };

    const handleExport = () => {
        exportEventsToJSON();
    };

    const handleSave = () => {
        saveCalendarImage(document.body.querySelector('#calendar') as HTMLDivElement);
    };

    const handlePrevMonth = () => {
        if (month === 0) {
            setCurrentMonthYear({ month: 11, year: year - 1 });
        } else {
            setCurrentMonthYear({ month: month - 1, year });
        }
    };

    const handleNextMonth = () => {
        if (month === 11) {
            setCurrentMonthYear({ month: 0, year: year + 1 });
        } else {
            setCurrentMonthYear({ month: month + 1, year });
        }
    };

    const handleCurrentMonth = () => {
        setCurrentMonthYear({ month: new Date().getMonth(), year: new Date().getFullYear() });
    };

    return (
        <StyledCalendarHeader>
            <ButtonGroup variant="contained" color="success">
                <Button onClick={handleImport}>Import</Button>
                <Button onClick={handleExport}>Export</Button>
                <Button onClick={handleSave}>Save</Button>
            </ButtonGroup>
            <input type="file" className="hidden-input" ref={hiddenInput} onChange={handleFileChange} />
            <ButtonGroup variant="outlined" color="success">
                <Button onClick={handlePrevMonth}>Prev</Button>
                <Button onClick={handleCurrentMonth}>{`${monthName} ${year}`}</Button>
                <Button onClick={handleNextMonth}>Next</Button>
            </ButtonGroup>
        </StyledCalendarHeader>
    );
};
