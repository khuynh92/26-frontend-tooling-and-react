import React from 'react';

class Pre extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <pre>{this.props.content}</pre>;
  }
}

export default Pre;