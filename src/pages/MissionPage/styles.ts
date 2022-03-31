import styled from 'styled-components';
import { theme, ThemeModel } from '../../styles/theme';

export const CardContainerHolder = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  min-width: 366px;
  border-radius: 6px;
  margin: 0px 4px 0px 4px;
  padding: 0px 8px 0px 8px;
`;

export const CardContainerHeader = styled.div`
  span {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #333333;
    margin: 19px 24px;
  }
`;

export const CardContainerList = styled.div`
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.3em;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #cfcfcf;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.gray};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #707070;
  }
`;

export const AppCard = styled.div<ThemeModel>`
  padding: 16px;
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${({ styled, theme }) => (styled === 'danger' ? theme[styled] : '#f5f6fa')};
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 8px;

  .card-header {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #454545;
    margin-left: 12px;
  }

  .time-stamp {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: #454545;
    margin-left: 28px;
    margin-bottom: 16px;
  }

  .card-sub-title {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 12px;
    text-transform: uppercase;
    color: #454545;
    margin-left: 28px;
  }

  .card-sub-info {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: ${({ styled, theme }) =>
      styled ? theme[styled] : '#454545'} !important;
    margin-left: 12px;
  }

  div:last-child {
    span.anticon {
      color: ${({ styled, theme }) =>
        styled ? theme[styled] : '#454545'} !important;
    }
  }
`;

export const AppTag = styled.div`
  width: 40px;
  height: 24px;
  background-color: #f5f5f5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #454545;
  }
`;
