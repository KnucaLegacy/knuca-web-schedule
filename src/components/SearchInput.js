import React, { Component } from 'react';
import { Button, Input, InputGroupAddon, InputGroup } from "reactstrap";


export default class SearchInput extends Component {
    render() {
        return (
            <InputGroup className="main-input">
                <Input onChange={this.props.onInputChange} placeholder="Введите группу\преподавателя" />
                <InputGroupAddon addonType="prepend">
                    <Button color="success">
                        <span className="oi oi-magnifying-glass"></span>
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        );
    }
}