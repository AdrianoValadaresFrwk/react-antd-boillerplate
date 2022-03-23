import React, { ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrawer } from '../../contexts/Drawer';
import { MENU_ITENS, SUB_MENU_ITENS } from './const';
import { base64ToImage } from '../../utils/images/base64ToImage';

import {
  UserWrapper,
  UserInfoWrapper,
  MenuStyled,
  MenuItemStyled,
  SubMenuStyled,
  AvatarStyled,
  UserName,
  UserEmail,
  DrawerText,
} from './styles';
import SvgIcon from '../shared/SvgIcon';
import AuthContext from '../../contexts/Authentication';

const Menu = (): ReactElement<HTMLElement> => {
  const navigate = useNavigate();
  const { collapsed } = useDrawer();
  const { userData } = useContext(AuthContext);

  const userImage = base64ToImage(userData?.foto);

  const userName = () => {
    const fullName = userData?.nome;
    const name = fullName.split(' ')[0];
    return name;
  };
  const userEmail = () => {
    const fullEmail = userData?.email;
    const email = fullEmail.split('@')[0];
    return email;
  };

  return (
    <MenuStyled mode="inline" theme="dark" inlineCollapsed={collapsed}>
      <UserWrapper>
        <AvatarStyled src={userImage} />
        {!collapsed && (
          <UserInfoWrapper>
            <UserName>{userName()}</UserName>
            <UserEmail>{userEmail()}</UserEmail>
          </UserInfoWrapper>
        )}
      </UserWrapper>

      {MENU_ITENS.map(({ name, label, icon, route }) => (
        <MenuItemStyled
          key={name}
          icon={<SvgIcon icon={icon} onClick={() => navigate(route)} />}
        >
          <DrawerText onClick={() => navigate(route)}>{label}</DrawerText>
        </MenuItemStyled>
      ))}
      <SubMenuStyled
        key="drawer-sub-menu"
        title={<DrawerText>Configurações</DrawerText>}
        icon={<SvgIcon icon="settings" />}
      >
        {SUB_MENU_ITENS.map(({ name, label, route }) => (
          <MenuItemStyled key={name} onClick={() => navigate(route)}>
            <DrawerText>{label}</DrawerText>
          </MenuItemStyled>
        ))}
      </SubMenuStyled>
    </MenuStyled>
  );
};

export default Menu;
