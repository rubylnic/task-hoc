import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { Component } from 'react/cjs/react.production.min';
import React from 'react';
import Time from './components/Time';
import Highlight from './components/Highlight';

function withLogger(Component) {
  return class extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  }
}


const LoggedComponent = withLogger(Counter);


class App extends Component {
  state = {
    value: 0
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        {/* <LoggedComponent
          value={this.state.value}
          addOne={() => this.setState(({ value }) => ({ value: value + 1 }))}
          decOne={() => this.setState(({ value }) => ({ value: value - 1 }))}
        /> */}
        <Time />
        <Highlight />
      </div>
    );
  }

}
export default App;
