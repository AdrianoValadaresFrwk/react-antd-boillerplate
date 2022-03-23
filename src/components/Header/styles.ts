import React from 'react';
import styled from 'styled-components';
import { Avatar, Popover } from 'antd';
import { AvatarProps } from 'antd/lib/avatar';
import { PopoverProps } from 'antd/lib/popover';

export const AvatarStyled: React.FC<AvatarProps> = styled(Avatar)`
  width: 28px !important;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #006c4f;
  margin: 16px 38px;
  font-family: roboto;
  font-size: 14px;
  font-weight: 700;
`;

export const PopoverStyled: React.FC<PopoverProps> = styled(Popover)``;

export const Container = styled.header`
  width: 100%;
  height: 60px;
  color: #4f4f4f;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;

export const Centralized = styled.div`
  display: flex;
  align-items: center;
`;

export const Left = styled(Centralized)``;

export const Right = styled(Centralized)``;

export const WrapperIcon = styled.div`
  margin-left: 24px;
  margin-right: 30px;
  cursor: pointer;
`;
export const WrapperImage = styled.div``;

export const NotificationIcon = styled.div``;

export const UserIcon = styled(Centralized)`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  border-radius: 18px;
  margin-left: 18px;
  margin-right: 38px;
  color: #ffffff;
  background-color: #006c4f;
  /*  */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.01em;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const WrapperMenu = styled.div`
  display: block;
  position: absolute;
  top: 70px;
  right: 0;
`;
