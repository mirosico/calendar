import styled from 'styled-components';

export const StyledFilter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: auto;
    padding: 30px;
    color: #000;
`;

export const StyledCheckBoxes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .check-box {
        display: inline-flex;
        padding: 0;
        margin: 5px 0;
    }
`;
