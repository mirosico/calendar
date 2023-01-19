import React from 'react';
import { StyledLabel } from './styles';

import { Label as ILabel } from '../../constants';

interface LabelProps {
    label: ILabel;
}

export const Label: React.FC<LabelProps> = ({ label }) => {
    return <StyledLabel color={label.color}>{label.name}</StyledLabel>;
};
