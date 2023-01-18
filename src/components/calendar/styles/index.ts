import styled from 'styled-components';

export const StyledCalendarBody = styled.table`
    width: calc(100% - 200px);
    height: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    background-color: #fff;
    color: #000;
    table-layout: fixed;
    border-spacing: 0;

    thead {
        background-color: #f5f5f5;
        border-bottom: 1px solid #ccc;
        tr {
            th {
                padding: 10px 15px;
                text-align: left;
            }
        }
    }
    tbody {
        tr {
            height: 100px;
            max-height: 100px;
            td {
                padding: 5px;
                border-bottom: 1px solid #ccc;
                height: 100px;
                border-right: 1px solid #ccc;
                text-align: right;
                margin: 0;
                &:first-child {
                    border-left: 1px solid #ccc;
                }
            }
        }
    }
    .weekend {
        color: #f00;
    }
`;

export const StyledCalendarHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    color: #000;
    background-color: antiquewhite;

    .hidden-input {
        opacity: 0;
        visibility: hidden;
    }
`;

export const StyledCalendar = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 0;

    .calendar-body {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
`;
