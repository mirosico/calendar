import React, { useState } from 'react';
import { useModal } from '../../context/modal-context';
import { Day, Event, Label } from '../../constants';
import { generateEventUid } from '../../utils';
import { StyledCreateEvent } from './styles';
import { CreateLabel, defaultLabel } from './CreateLabel';
import { LabelList } from '../labels';

interface CreateEventProps {
    day: Day;
    addEvent: (event: Event) => void;
}

export const CreateEvent: React.FC<CreateEventProps> = ({ day, addEvent }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [label, setLabel] = useState<Label>(defaultLabel);
    const [labels, setLabels] = useState<Label[]>([]);

    const { unSetModal } = useModal();

    const isSaveDisabled = title.trim() === '';

    const handleAddEvent = () => {
        if (isSaveDisabled) {
            return;
        }
        const date = day.date;
        const id = generateEventUid(title, date);
        const newEvent: Event = {
            id,
            title,
            description,
            date,
            labels,
        };
        addEvent(newEvent);
        unSetModal();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        switch (id) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'description':
                setDescription(e.target.value);
                break;
            default:
                break;
        }
    };

    const inputs = [
        {
            id: 'title',
            label: 'Enter title',
            value: title,
            onChange: handleChange,
            required: true,
        },
        {
            id: 'description',
            label: 'Enter description',
            value: description,
            onChange: handleChange,
            required: false,
        },
    ];

    const handleAddLabel = () => {
        if (label.name.trim() === '') {
            return;
        }
        const labelUniqueId = label.name + label.color;
        if (labels.find((label) => label.id === labelUniqueId)) {
            alert('Label already exists');
            return;
        }
        const newLabel = { ...label, id: labelUniqueId };
        setLabels([...labels, newLabel]);
        setLabel(defaultLabel);
    };

    return (
        <StyledCreateEvent>
            <h1>Create Event</h1>
            {inputs.map((input) => (
                <input
                    key={input.id}
                    id={input.id}
                    type="text"
                    value={input.value}
                    onChange={input.onChange}
                    placeholder={input.label}
                    required={input.required}
                />
            ))}
            <LabelList labels={labels} />
            <CreateLabel label={label} setLabel={setLabel} handleAddLabel={handleAddLabel} />
            <div className="buttons">
                <button className="cancel" onClick={unSetModal}>
                    Close
                </button>
                <button className="save" onClick={handleAddEvent} disabled={isSaveDisabled}>
                    Create
                </button>
            </div>
        </StyledCreateEvent>
    );
};
