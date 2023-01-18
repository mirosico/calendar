import React, { useRef } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { StyledCalendarHeader } from './styles';
import { getMonthName } from '../../utils';
import { useSaveAsImage } from '../../hooks';

interface CalendarHeaderProps {
    month: number;
    year: number;
    setMonth: (month: number) => void;
    setYear: (year: number) => void;
    exportEventsToJSON: () => void;
    importEventsFromJSON: (file: File) => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
    month,
    setMonth,
    year,
    setYear,
    exportEventsToJSON,
    importEventsFromJSON,
}) => {
    const hiddenInput = useRef<null | HTMLInputElement>(null);
    const { saveCalendarImage } = useSaveAsImage();

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
    const monthName = getMonthName(month);

    const handlePrevMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    const handleNextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    };

    const handleCurrentMonth = () => {
        setMonth(new Date().getMonth());
        setYear(new Date().getFullYear());
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
