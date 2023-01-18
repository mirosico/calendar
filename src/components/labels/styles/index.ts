import styled from 'styled-components';

export const StyledLabel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    height: 20px;
    padding: 2px 5px;
    border-radius: 5px;
    background-color: ${(props) => props.color};
    color: white;
`;

export const StyledLabelList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    row-gap: 5px;
    column-gap: 5px;
`;
