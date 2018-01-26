import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';

class Search extends Component {
  state = {
    data: {
      word: '',
    },
  };

  render() {
    return (
      <div className="searcg-bar">
        <Form.Field>
          <input type="text" name="search" icon="search" />
        </Form.Field>
      </div>
    );
  }
}

export default Search;
