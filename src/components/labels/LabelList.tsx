import React from 'react';
import { Label as ILabel } from '../../constants';
import { StyledLabelList } from './styles';
import { Label } from './Label';

interface LabelListProps {
    labels: ILabel[];
}

export const LabelList: React.FC<LabelListProps> = ({ labels }) => {
    return (
        <StyledLabelList>
            {labels.length > 0 && <span>Labels:</span>}
            {labels.map((label) => (
                <Label key={label.id} label={label} />
            ))}
        </StyledLabelList>
    );
};
