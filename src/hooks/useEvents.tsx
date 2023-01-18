import React, { useEffect, useState } from 'react';
import { Event } from '../constants';

export const useEvents = () => {
    const [events, setEvents] = useState<Event[]>([]);

    const getEventsFromLocalStorage = () => {
        try {
            const events = JSON.parse(localStorage.getItem('events') || '[]').map((event: any) => ({
                ...event,
                date: new Date(event.date),
            }));
            setEvents(events);
        } catch (error) {
            alert('Error while loading events from local storage');
            console.error(error);
            localStorage.removeItem('events');
        }
    };

    useEffect(() => {
        getEventsFromLocalStorage();
    }, []);

    const addEvent = async (event: Event) => {
        try {
            const newEvents = [...events, event];
            setEvents(newEvents);
            localStorage.setItem('events', JSON.stringify(newEvents));
            await getEventsFromLocalStorage();
        } catch (error) {
            console.error(error);
        }
    };

    const exportEventsToJSON = () => {
        alert('Events exported to JSON');
        const eventsJSON = JSON.stringify(events);
        const element = document.createElement('a');
        const file = new Blob([eventsJSON], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'events.json';
        document.body.appendChild(element);
        element.click();
    };

    const importEventsFromJSON = (file: File) => {
        const reader = new FileReader();
        reader.onload = function (event) {
            try {
                const events = JSON.parse(event.target?.result as string);
                localStorage.setItem('events', JSON.stringify(events));
                getEventsFromLocalStorage();
            } catch (error) {
                alert('Error while importing events');
                console.error(error);
            }
        };
        reader.readAsText(file);
    };

    return { events, addEvent, importEventsFromJSON, exportEventsToJSON };
};
