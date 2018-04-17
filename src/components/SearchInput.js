import React from 'react';
import { Button, Input, InputGroupAddon, InputGroup } from 'reactstrap';


const SearchInput = () => (
  <InputGroup className="main-input" size="lg">
    <Input
        onChange={this.props.onInputChange}
        placeholder="Введите группу\преподавателя"
    />
    <InputGroupAddon addonType="prepend">
      <Button color="success">
        <span className="oi oi-magnifying-glass" />
      </Button>
    </InputGroupAddon>
  </InputGroup>
);

export default SearchInput;
