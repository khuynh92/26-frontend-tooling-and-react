import React from 'react';

class Pre extends React.Component {
  render() {
    return <pre>{this.props.content}</pre>;
  }
}

export default Pre;