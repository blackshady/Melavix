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
  Label,
  Dropdown,
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import InlineError from '../messages/InlineError';
import {countries, flagRenderer} from "../../enum/countryOptions"
import logo from '../../logo/logo.png';






class SignupForm extends React.Component {
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

 
/**
 * 
 * 
 * @returns 
 * @memberof SignupForm
 */
render() {
    const {data, errors, loading} = this.state;

    return (
      <div className="ui container">
        <Segment className="main"   raised size="huge">
        <Grid columns='equal' divided stackable container>


        {/** first segment */}
          <Grid.Column verticalAlign="middle" textAlign="center">
          <div className="sec_con">
          <span >
                <Image className="logo" verticalAlign="middle"
                size="small"
                  src={logo}
                  style={{
                    marginRight: '1.5em',
                  }}
                />{' '}
              </span>

              <br/>

              <span className="create">Create Your Melavix Account</span>{' '}
              <div className="discover">Discover</div>
              <span className="latest" >Latest Apartment Near You</span>

          </div>
          </Grid.Column>
          {/** End of first segment */}






            {/** SIGN UP FORM */}


          <Grid.Column>
        <Segment>
          <Form onSubmit={this.onSubmit} loading={loading}>
            {errors.global && (
              <Message negative>
                <Message.Header>Something went wrong</Message.Header>
                <p>{errors.global}</p>
              </Message>
            )}
            {/** user name filed */}
            <Form.Field error={!!errors.email}>
              <Input
                fluid
                icon="user"
                iconPosition="left"
                id="user_name"
                name="user_name"
                placeholder="User Name"
                onChange={this.onChange}
              />
              {errors.email && <InlineError text={errors.email} />}
            </Form.Field>

            {/** first name */}
            <Form.Field>
              <Input
                fluid
                icon="user"
                iconPosition="left"
                id="first_name"
                name="first_name"
                placeholder="First Name"
                onChange={this.onChange}
              />
            </Form.Field>

            {/** Last Name */}
            <Form.Field>
              <Input
                fluid
                icon="user"
                iconPosition="left"
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                onChange={this.onChange}
              />
            </Form.Field>

            {/** password field */}
            <Form.Field>
              <Input
                fluid
                icon="lock"
                iconPosition="left"
                type="password"
                id="password"
                name="password"
                placeholder="Create Password"
                onChange={this.onChange}
              />
            </Form.Field>

            {/** password field */}
            <Form.Field>
              <Input
                fluid
                icon="lock"
                iconPosition="left"
                type="password"
                id="confirm_password"
                name="password"
                placeholder="Confirm Password"
                onChange={this.onChange}
              />
            </Form.Field>
            {/** Gender */}
            <Form.Group inline>
           <span>Gender</span>
          <Form.Checkbox label='Male'  onChange={this.handleChange} />
          <Form.Checkbox  label='Female' onChange={this.handleChange} />
        </Form.Group>

             {/** emailfiled */}
             <Form.Field error={!!errors.email}>
              <Input
                fluid
                icon="mail outline"
                iconPosition="left"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.onChange}
              />
              {errors.email && <InlineError text={errors.email} />}
            </Form.Field>


            {/** mobile phone field */}
            <Form.Field>
              <Input
                fluid
                icon="phone"
                iconPosition="left"
                type="password"
                id="phone"
                name="phone"
                placeholder="Mobile Phone"
                onChange={this.onChange}
              />
            </Form.Field>

          
            {/** county field */}
            <Form.Field>
            <Dropdown placeholder='Select Country' pointing="top" fluid multiple search selection options={countries.map(country=>(
              <li key={country.countryCode}>{flagRenderer(country)}{country.name}</li>
            )) } />
            </Form.Field>

            <Button primary basic  className="btn">
              Next Step
            </Button>
          </Form>
        </Segment>
        </Grid.Column>
        </Grid>
        </Segment>

    {/** global style this style will latter be copyied  out from here */}

            <style>{`

            .ui.grid.main{
             
            }
            div.sec_con{
              margin-left: auto;
              margin-right: auto;
             align-items: center;
            justify-content: center
            }

            .ui.image.logo{     
              display: block;
              width: 70%;
                 
            }
            div.discover{
              
            margin: 20% 0% 10% 0%;
            font-family: 'Trebuchet ms' 'Medium', 'Arial Narrow', Arial, sans-serif;
            font-size:3em;
            color: #00424F;
            }
            span.create{
              margin-top: 10%;
              color:#00424F;
              height: 100%;
              
            }

            span.latest{
              color:#00424F;
              text-justify: auto;
            }
            .ui.button.darkblue{
              color:#fff;
              background: #00424F;
              border-radius: 25%
            }
            `}</style>

      </div>
     
    );
  }
}
SignupForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SignupForm;
