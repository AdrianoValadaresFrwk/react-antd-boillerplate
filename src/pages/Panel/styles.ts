import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;
  margin: 0 auto;
`;

export const WrapperDashboard = styled.div`
  width: 100%;
  max-width: 74vw;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled.footer`
  width: 100%;
  max-width: 1440px;
  height: 30px;
  padding-left: 10%;
  background-color: #ffffff;

  position: absolute;
  bottom: 0;

  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.01em;
  text-align: left;
`;
