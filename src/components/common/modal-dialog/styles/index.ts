import styled from 'styled-components';

export const StyledModalDialog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 20px;
        padding: 0;
        margin: 0;
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    .modal-dialog {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f5f5f5;
        width: 400px;
        padding: 20px;
    }

    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        line-height: 20px;
        font-weight: bold;
        border: none;
        background-color: transparent;
        cursor: pointer;
        justify-self: flex-end;
        align-self: flex-start;
        padding: 10px;
        z-index: 9999999999;
        transition: 0.3s;
        text-transform: lowercase;
        font-family: 'Roboto', sans-serif;
        border-radius: 50%;

        &:hover {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
    }
`;
