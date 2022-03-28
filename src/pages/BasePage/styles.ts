import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 10px;
`;

export const WrapperMenu = styled.div`
  padding-top: 20px;
`;

export const Content = styled.section`
  width: 100%;
  height: 86vh;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-y: auto;
  overflow-x: hidden;
  color: #fff;
  background: #f0f6f5;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background: transparent;
  }

  ::-webkit-scrollbar-track-piece {
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 20px;
    height: 8px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Text = styled.p`
  width: 350px;
  min-width: 350px;
  padding: 0px;
  margin: 0;
`;

export const Img = styled.img`
  width: 11px;
  height: 11px;
  margin-right: 8px;
`;

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
    /* display: flex;
    align-items: center; */
    color: #333333;
    margin: 19px 24px;
  }
`;

export const CardContainerList = styled.div`
  overflow-y: auto;
`;

export const AppCard = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  border: 1px solid #f5f6fa;
  box-sizing: border-box;
  border-radius: 4px;

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

  .start-end {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 12px;
    text-transform: uppercase;
    color: #454545;
    margin-left: 28px;
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
