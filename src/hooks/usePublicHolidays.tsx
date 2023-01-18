import { useEffect, useState } from 'react';
import _ from 'lodash';
import { getAvailableCountries, getPublicHolidays } from '../services';
import { PublicHoliday } from '../constants';

export const usePublicHolidays = (year: number, month: number) => {
    const [publicHolidays, setPublicHolidays] = useState<PublicHoliday[]>([]);

    useEffect(() => {
        (async () => {
            const allPublicHolidays: PublicHoliday[] = await getAllPublicHolidays(year);
            const filteredPublicHolidays = allPublicHolidays.filter(
                (holiday) => new Date(holiday.date).getMonth() === month,
            );
            const uniqueHolidayDates = _.uniqBy(filteredPublicHolidays, 'name');
            setPublicHolidays(uniqueHolidayDates);
        })();
    }, [year, month]);

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
