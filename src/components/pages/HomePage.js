import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Container} from 'semantic-ui-react';
import * as actions from '../../actions/auth';
import Layout from '../Layout';

const HomePage = ({isAuthenticated, logout}) => (
  <Layout>
    <header>
      <div className="home-bg" />
    </header>
    <Container>
      <div className="con-wrapper">
        <h1>Home Page</h1>
        {isAuthenticated ? (
          <button onClick={() => logout()}>Logout</button>
        ) : (
          <div>
            <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </div>
    </Container>
  </Layout>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  };
}

export default connect(mapStateToProps, {logout: actions.logout})(HomePage);
