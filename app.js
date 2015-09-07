import React from 'react';
import CountDown from 'react-simple-countdown';

const MyComponent = React.createClass({
  render() {
    return(<CountDown date="2015-09-12T00:00:00+00:00" className="CountDown"/>);
  }
})
React.render(<MyComponent/>, document.body);
