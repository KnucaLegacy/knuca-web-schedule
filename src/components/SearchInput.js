import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, InputGroupAddon, InputGroup } from 'reactstrap';


const SearchInput = props => (
  <InputGroup className="main-input" size="lg">
    <Input
        onChange={props.onInputChange}
        placeholder="Почніть пошук..."
        value={props.searchQuery}
    />
    <InputGroupAddon addonType="prepend">
      <Button color="primary">
        <span className="oi oi-magnifying-glass" />
      </Button>
    </InputGroupAddon>
  </InputGroup>
);

SearchInput.propTypes = {
  onInputChange: PropTypes.func,
  searchQuery: PropTypes.string,
};

export default SearchInput;
