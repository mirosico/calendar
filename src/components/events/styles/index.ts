import styled from 'styled-components';

export const StyledCreateEvent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    row-gap: 10px;

    input {
        width: 100%;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        box-sizing: border-box;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0;
        margin: 0;
        column-gap: 10px;
        button {
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            cursor: pointer;
            transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
            font-weight: 500;
            font-size: 14px;
            text-transform: uppercase;

            &.cancel {
                background-color: #ccc;
                &:hover {
                    background-color: #aaa;
                }
            }
            &.save {
                background-color: #4caf50;
                color: white;
                &:hover {
                    background-color: #45a049;
                }
            }
        }
    }
`;

export const StyledCreateLabel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding: 0;
    margin: 0 auto;
    column-gap: 10px;
    input {
        width: 100%;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        box-sizing: border-box;
    }
    button {
        width: 200px;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
        background-color: #4caf50;
        color: white;
        &:hover {
            background-color: #45a049;
        }
    }
`;

export const StyledColorPicker = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
    padding: 0;
    margin: 0;
    column-gap: 10px;
    position: relative;

    .color-picker-button {
        width: auto;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 12px 20px;
        background-color: ${(props) => props.color};
        cursor: pointer;
        &:hover {
            background-color: ${(props) => props.color};
        }
    }

    .color-picker-window {
        position: absolute !important;
        top: 40px;
        left: 0;
    }
`;

export const StyledEventInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 15px;

    h2 {
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
        color: #333;
        font-family: 'Roboto', sans-serif;
    }

    b {
        font-weight: 500;
        color: #333;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        text-transform: none;
        padding: 0px;
        margin: 5px 0;
    }

    .labels-container {
        width: 80%;
    }
`;
