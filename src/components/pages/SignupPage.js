import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container} from 'semantic-ui-react';
import Layout from '../Layout';
import signup from '../../actions/users';
import SignupForm from '../forms/SiginupForm';

class SignupPage extends React.Component {
  submit = data => console.log(data);
  render() {
    return (
      <Layout>
        <Container>
          <div className="con-wrapper">
            <SignupForm submit={this.submit} />
          </div>
        </Container>
      </Layout>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  signup: PropTypes.func.isRequired,
};

export default connect(null, {signup})(SignupPage);
