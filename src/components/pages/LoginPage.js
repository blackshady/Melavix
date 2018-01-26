import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container} from 'semantic-ui-react';
import LoginForm from '../forms/LoginForm';
import Layout from '../Layout';
import {login} from '../../actions/auth';

class LoginPage extends React.Component {
  submit = data => console.log(data);

  render() {
    return (
      <Layout>
        <Container>
          <div className="con-wrapper">
            <LoginForm submit={this.submit} />
          </div>
        </Container>
      </Layout>
    );
  }
}

export default connect(null, {login})(LoginPage);
