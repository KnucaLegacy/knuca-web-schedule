import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, InputGroupAddon, InputGroup } from 'reactstrap';


const SearchInput = props => (
  <InputGroup className="main-input" size="lg">
    <Input
        onChange={props.onInputChange}
        placeholder="Введите группу\преподавателя"
    />
    <InputGroupAddon addonType="prepend">
      <Button color="success">
        <span className="oi oi-magnifying-glass" />
      </Button>
    </InputGroupAddon>
  </InputGroup>
);

SearchInput.propTypes = {
  onInputChange: PropTypes.func,
};

export default SearchInput;
