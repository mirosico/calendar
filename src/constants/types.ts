import React from 'react';

export interface Day {
    date: Date;
    day: number | null;
    weekDay: string;
    weekDayIndex: number;
    isToday: boolean;
    isWeekend: boolean;
    events: Event[];
    publicHolidays: Event[];
}

export interface Country {
    name: string;
    countryCode: string;
}

export enum PublicHolidayType {
    Public = 'Public',
    Bank = 'Bank',
    School = 'School',
    Authorities = 'Authorities',
    Optional = 'Optional',
    Observance = 'Observance',
}

export interface PublicHoliday {
    date: Date;
    localName: string;
    name: string;
    countryCode: string;
    fixed: true;
    global: true;
    counties: string[] | null;
    launchYear: number | null;
    types: PublicHolidayType[];
}

export interface Label {
    id: string;
    name: string;
    color: string;
}

export interface Event {
    id: string;
    title: string;
    description?: string;
    date: Date;
    labels?: Label[];
}

export interface CheckBox {
    id: string;
    name: string;
    color: string;
    checked: boolean;
}

export interface Filter {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    checkBoxes: CheckBox[];
    setCheckBoxes: React.Dispatch<React.SetStateAction<CheckBox[]>>;
    filteredDays: Day[][];
}
