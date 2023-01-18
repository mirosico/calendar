import React from 'react';
import { Label as ILabel } from '../../constants';
import { StyledLabel } from './styles';

interface LabelProps {
    label: ILabel;
}

export const Label: React.FC<LabelProps> = ({ label }) => {
    return <StyledLabel color={label.color}>{label.name}</StyledLabel>;
};
