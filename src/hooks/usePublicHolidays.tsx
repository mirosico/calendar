import { useEffect, useState } from 'react';
import _ from 'lodash';
import { getAvailableCountries, getPublicHolidays } from '../services';
import { MonthYear, PublicHoliday } from '../constants';

export const usePublicHolidays = (currentMonthYear: MonthYear) => {
    const [allPublicHoliday, setAllPublicHoliday] = useState<PublicHoliday[]>([]);
    const [publicHolidays, setPublicHolidays] = useState<PublicHoliday[]>([]);

    const { month, year } = currentMonthYear;

    useEffect(() => {
        (async () => {
            const allPublicHolidays: PublicHoliday[] = await getAllPublicHolidays(year);
            setAllPublicHoliday(allPublicHolidays);
        })();
    }, [year]);

    useEffect(() => {
        (async () => {
            const filteredPublicHolidays = allPublicHoliday.filter(
                (holiday) => new Date(holiday.date).getMonth() === month,
            );
            const uniqueHolidayDates = _.uniqBy(filteredPublicHolidays, 'name');
            setPublicHolidays(uniqueHolidayDates);
        })();
    }, [allPublicHoliday, month]);

    const getAllCountries = async (): Promise<string[]> => {
        const response = await getAvailableCountries();
        if (response.success && response.data) {
            return response.data.map((country) => country.countryCode);
        }
        return [];
    };

    const getPublicHolidaysForCountry = async (countryCode: string, year: number): Promise<PublicHoliday[]> => {
        const response = await getPublicHolidays(countryCode, year);
        if (response.success && response.data) {
            return response.data;
        }
        return [];
    };

    const getAllPublicHolidays = async (year: number): Promise<PublicHoliday[]> => {
        const countryCodes = await getAllCountries();
        const allPublicHolidays = await Promise.all(
            countryCodes.map((countryCode) => getPublicHolidaysForCountry(countryCode, year)),
        );
        return allPublicHolidays.flat();
    };

    return publicHolidays;
};
