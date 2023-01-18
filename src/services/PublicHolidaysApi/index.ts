import axios from 'axios';
import config from '../../config';
import { Country, PublicHoliday } from '../../constants';

axios.defaults.baseURL = config.PUBLIC_HOLIDAYS_API_BASE_URL;

export const getAvailableCountries = async (): Promise<{ success: boolean; data: Country[] | null }> => {
    try {
        const response = await axios.get('AvailableCountries');
        return { success: true, data: response.data };
    } catch (e) {
        console.log(e);
    }
    return { success: false, data: null };
};

export const getPublicHolidays = async (
    countryCode: string,
    year: number,
): Promise<{ success: boolean; data: PublicHoliday[] | null }> => {
    try {
        const response = await axios.get(`PublicHolidays/${year}/${countryCode}`);
        return { success: true, data: response.data };
    } catch (e) {
        console.log(e);
    }
    return { success: false, data: null };
};
