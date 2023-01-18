import styled from 'styled-components';

export const CellBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    overflow: auto;
    max-height: 90px;
    height: 90px;
`;

export const CellHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;

    button {
        border: none;
        border-radius: 5px;
        cursor: pointer;
        padding: 1px;
        margin: 5px;
        min-width: 30px;
    }
`;

export const StyledCell = styled.div`
    display: block;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;
`;
