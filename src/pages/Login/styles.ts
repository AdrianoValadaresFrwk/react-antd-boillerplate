import styled from 'styled-components';

import aircraft from '../../assets/img/aircraft.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
`;

export const Section = styled.section`
  height: 100vh;
`;

export const Left = styled(Section)``;

export const Right = styled(Section)`
  width: 60%;
  background-image: url(${aircraft});
  background-repeat: round;
  color: #ffffff;
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
  position: absolute;
  width: 200px;
  height: 30px;
  left: 106px;
  top: 220px;
  color: #007071;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.1px;
`;

export const WrapperNotification = styled.div`
  position: absolute;
  top: 268px;
  left: 107px;
`;

export const Form = styled.form`
  position: absolute;
  height: 54px;
  width: 342px;
  left: 108px;
  top: 280px;
  border-radius: 3px;
`;

export const Image = styled.img`
  position: absolute;
  height: 30px;
  width: 182px;
  left: 55px;
  top: 56px;
`;

export const WrapperButton = styled.div`
  position: absolute;
  right: -5px;
  top: 160px;
`;

export const ErrorMessage = styled.p`
  color: #f01f0e;
  position: absolute;
  font-size: 12px !important;
  left: 106px;
  top: 250px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.1px;
`;
