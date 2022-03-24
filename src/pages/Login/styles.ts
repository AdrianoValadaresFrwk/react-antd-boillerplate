import styled from 'styled-components';
import { Form as AntdForm } from 'antd';
import aircraft from '../../assets/img/aircraft.png';
import unimedLandingImg from '../../assets/img/unimed_aeromedica.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
`;

export const Section = styled.section`
  height: calc(100vh - 20px);
`;

export const Left = styled(Section)`
  /* width: 50%; */
  background-image: url(${unimedLandingImg});
  background-repeat: round;
  color: #ffffff;
  position: relative;
`;

export const Right = styled(Section)`
  width: 50%;
  position: relative;
`;

export const Title = styled.h2`
  width: 361px;
  margin-top: 245px;
  margin-left: 86px;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0.1px;
  color: #fff;
`;

export const Text = styled.p`
  width: 270px;
  height: 88px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.42353px;
  color: #454545;
  margin-bottom: 16px;
`;

export const WrapperNotification = styled.div`
  position: absolute;
  top: 268px;
  left: 107px;
`;

export const Form = styled.form`
  position: absolute;
  /* height: 54px;
  width: 342px;
  left: 108px;
  top: 280px; */
  border-radius: 3px;
`;

export const LoginPageLogo = styled.img`
  /* position: absolute; */
  width: 115px;
  height: 40px;
  margin-right: 146px;
  margin-bottom: 24px;
  /* left: 55px;
  top: 56px; */
`;

export const WrapperButton = styled.div`
  /* position: absolute;
  right: -5px;
  top: 160px; */
`;

export const ErrorMessage = styled.p`
  color: #f01f0e;
  /* position: absolute; */
  font-size: 12px !important;
  /* left: 106px;
  top: 250px; */
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.1px;
`;

export const LoginPageFooter = styled.footer`
  background-color: #0a5f55;
  height: 20px;
`;

export const FormHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 20px);
  justify-content: center;
  align-items: center;
`;

export const LoginInfo = styled.p`
  font-family: 'Open Sans';
  font-style: 'normal';
  font-weight: '400';
  font-size: '14px';
  line-height: '19px';
  color: '#454545';
  margin-bottom: 40px;
`;
