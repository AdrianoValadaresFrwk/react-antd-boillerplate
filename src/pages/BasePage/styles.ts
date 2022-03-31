import styled from 'styled-components';
import { Button } from 'antd';

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

export const HeaderUserName = styled.h1`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #333333;
  margin-bottom: 0px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const HeaderButton = styled(Button)`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
  color: #b1d34b;
  height: 40px;
`;

export const AppLogo = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 0px;
`;
