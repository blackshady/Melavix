import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Button, Image, Container} from 'semantic-ui-react';
import logo from '../../logo/logo2.png';

const TopNavigation = () => (
  <div className="Menu-wrapper">
    <Menu borderless fixed="top" inverted fitted className="Menu">
      <Container>
        <Menu.Item>
          <Link to="/">
            <Image size="tiny" src={logo} />
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/">HOME</Link>
        </Menu.Item>
        <Menu.Item>ABOUT</Menu.Item>
        <Menu.Item>PROPERTY</Menu.Item>
        <Menu.Item>AGENT</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/login">
              <Button inverted basic className="btn">
                Sign in
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/signup">
              <Button basic inverted className="btn">
                Sign up
              </Button>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  </div>
);

export default TopNavigation;
