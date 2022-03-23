import { Menu, Avatar } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { AvatarProps } from 'antd/lib/avatar';
import React from 'react';
import styled from 'styled-components';

export const MenuStyled: React.FC<MenuProps> = styled(Menu)`
  background-color: #006c4f !important;
  padding: 20px;
  max-width: 256px;
  height: 100vh;
  z-index: 1;
  & li {
    background-color: #006c4f !important;
  }
  & span {
    padding: 10px;
  }
`;

export const WrapperMenuStyled = styled.div``;

export const MenuItemStyled = styled(Menu.Item)`
  padding: 10px !important;
`;

export const SubMenuStyled = styled(Menu.SubMenu)`
  .ant-menu-submenu-title {
    padding: 10px !important;
  }
  & ul {
    background: none !important;
    padding: 0 !important;
  }
  & li {
    border: none !important;
  }
`;

export const DrawerText = styled.span`
  font-style: normal;
  font-weight: normal;
  color: #ffffff;

  transition: all 0.3s ease 0s;
  &:hover {
    opacity: 0.7;
  }
`;

export const AvatarStyled: React.FC<AvatarProps> = styled(Avatar)`
  width: 62px;
  height: 47px;
  padding: 5px !important;
  margin-bottom: 10px !important;
`;

export const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const UserInfoWrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  margin-bottom: 5px;
`;

export const UserName = styled.span`
  font-style: normal;
  font-weight: 600;
  line-height: 5px;
  color: #ffffff;
`;

export const UserEmail = styled(UserName)`
  font-weight: 400;
`;
