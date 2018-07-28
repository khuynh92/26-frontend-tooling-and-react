

import React from 'react';
import ReactDOM from 'react-dom';

import { say as cowsay } from 'cowsay';

import faker from 'faker';

import Header from './components/Header.js';
import Pre from './components/Pre.js';
import Button from './components/Button.js';
import Select from './components/Select.js';

import './style/app.scss';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animalStr: 'Cow',
      animal: '',
      content: cowsay({
        text: 'CLICK THE BUTTON',
        cow: '',
      }),
    };
    this.newContent = this.newContent.bind(this);
    this.newAnimal = this.newAnimal.bind(this);

  }

  newContent() {
    let name = faker.name.findName();
    let adj = faker.hacker.adjective();
    let text = `my name is ${name}, and I'm a ${adj} ${this.state.animalStr}`;
    this.setState({
      content: cowsay({
        text,
        cow: this.state.animal,
      }),
    });
  }

  newAnimal(event) {
    let adj = faker.hacker.adjective();
    this.setState({
      animalStr: event.target.options[event.target.selectedIndex].text,
      animal: event.target.value,
      content: cowsay({
        text: `my name is ${name}, and I'm a ${adj} ${event.target.options[event.target.selectedIndex].text}`,
        cow: event.target.value,
      }),
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Select newAnimal={this.newAnimal} />
        <Pre content={this.state.content} />
        <Button newContent={this.newContent} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

