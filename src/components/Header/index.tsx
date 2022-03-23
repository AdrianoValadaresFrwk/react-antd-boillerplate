import { ReactElement, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrawer } from '../../contexts/Drawer';
import AuthContext from '../../contexts/Authentication';

import bellNotification from '../../assets/img/icons/bell-notifications.svg';
import bell from '../../assets/img/icons/bell.svg';
import logo from '../../assets/img/logo-small.svg';
import AccountMenu from '../AccountMenu';
import SvgIcon from '../shared/SvgIcon';
import {
  Container,
  Left,
  Right,
  WrapperIcon,
  WrapperImage,
  NotificationIcon,
  Button,
  AvatarStyled,
  PopoverStyled,
} from './styles';

const Header = (): ReactElement<HTMLHeadElement> => {
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const hasNotification = true;
  const { setCollapse } = useDrawer();
  const { userData } = useContext(AuthContext);

  const userInitials = userData?.nome?.substring(0, 2);

  return (
    <Container>
      <Left>
        <WrapperIcon>
          <SvgIcon icon="menu-bars" onClick={setCollapse} className="cursor" />
        </WrapperIcon>
        <WrapperImage>
          <SvgIcon icon="logo" size="xxxlarge" />
        </WrapperImage>
      </Left>
      <Right>
        <NotificationIcon>
          {hasNotification ? (
            <Button
              onClick={() => {
                navigate('/notificacao');
              }}
            >
              <SvgIcon icon="bell-notifications" size="large" />
            </Button>
          ) : (
            <SvgIcon icon="bell" />
          )}
        </NotificationIcon>
        <Button
          onClick={() => {
            setShowAccountMenu(!showAccountMenu);
          }}
        >
          <PopoverStyled
            placement="bottomRight"
            content={<AccountMenu />}
            trigger="click"
          >
            <AvatarStyled>{userInitials}</AvatarStyled>
          </PopoverStyled>
        </Button>
      </Right>
    </Container>
  );
};

export default Header;
