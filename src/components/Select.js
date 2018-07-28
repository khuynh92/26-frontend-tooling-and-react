

import React from 'react';
import {SQUIRREL, ELEPHANT, GOAT, KITTY, KOALA, VADER } from 'cowsay';
 
class Select extends React.Component {

  render() {
    return (
      <select onChange={this.props.newAnimal}>
        <option value=''>Cow</option>
        <option value={SQUIRREL}>Squirrel</option>
        <option value={ELEPHANT}>Elephant</option>
        <option value={GOAT}>Goat</option>
        <option value={KITTY}>Kitty</option>
        <option value={KOALA}>Koala</option>
        <option value={VADER}>Vader</option>
      </select>
    );
  }
}

export default Select;