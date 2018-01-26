import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Button,
  Message,
  Input,
  Segment,
  Header,
  Image,
  Grid,
  Container,
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import InlineError from '../messages/InlineError';
import logo from '../../logo/logo.png';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    loading: false,
    errors: {},
  };

  onChange = e =>
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value},
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
      this.setState({loading: true});
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({errors: err.response.data.errors, loading: false})
        );
    }
  };

  /** validate if form is empty */
  validate = data => {
    const errors = {};
    if (!data.email) errors.email = "Email or User Name Can't be left blank";
    if (!data.password) errors.password = "Password Can't be left blank";

    return errors;
  };

  render() {
    const {data, errors, loading} = this.state;

    return (
      <Container>
        <div>
          <Segment
            raised
            className="login-cnt"
            style={{
              maxWidth: 370,
            }}
          >
            <Grid
              textAlign="center"
              style={{
                height: '100%',
              }}
              verticalAlign="middle"
            >
              <Grid.Column>
                <span>
                  <Image
                    size="small"
                    verticalAlign="top"
                    src={logo}
                    style={{
                      marginRight: '1.5em',
                    }}
                  />{' '}
                </span>
                <Header className="login-text">
                  {' '}
                  Sign in to your account{' '}
                </Header>
              </Grid.Column>
            </Grid>
            <Segment raised size="huge">
              <Form onSubmit={this.onSubmit} loading={loading}>
                {errors.global && (
                  <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.global}</p>
                  </Message>
                )}

                {/** user name or email Field */}
                <Form.Field error={!!errors.email}>
                  <Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    id="email"
                    name="email"
                    placeholder="E-mail address or User Name"
                    value={data.email}
                    onChange={this.onChange}
                  />
                  {errors.email && <InlineError text={errors.email} />}
                </Form.Field>

                {/** password Field */}
                <Form.Field error={!!errors.password}>
                  <Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={this.onChange}
                  />
                  {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Form.Field>
                  <Grid className="forget_pass">
                    <Form.Checkbox label="Remember me." />
                    <Link to="/login"> Forget password ? </Link>{' '}
                  </Grid>{' '}
                </Form.Field>

                {/** login button */}
                <Button fluid className="btn">
                  Login
                </Button>
              </Form>
            </Segment>
            <Grid verticalAlign="middle" textAlign="center" className="sign_up">
              {' '}
              New to us ? <Link to="/signup"> Sign up </Link>{' '}
            </Grid>{' '}
          </Segment>
        </div>
      </Container>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;
