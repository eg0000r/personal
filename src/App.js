import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Home'
import Home from "./Home";

class LogInWidget extends Component{
  render() {
    return (
        <div className={'login-widget-root'}>
          <div className={'login-widget'}>

          </div>
        </div>
    )
  }
}

class MenuBarButton extends Component{
  render() {
    if (this.props.active) {
      return (
          <div>
            <button className={'menu-bar-active'}>{this.props.text}</button>
          </div>
      )
    }
    return (
        <div>
          <button onClick={this.props.handle} value={this.props.value} className={'menu-bar'}>{this.props.text}</button>
        </div>
    )
  }
}

class MenuBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      one: true,
      two: false,
      three: false,
      four: false,
      page: 'home',
    }
  }
  pageContent = () => {
    if (this.state.page === 'home') {
      return (
          <Home/>
      )
    }
    return null;
  };
  buttonHandler = (e) => {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
    });
    // eslint-disable-next-line default-case
    switch (e.target.value) {
      case '1':
        this.setState({one: true, page: 'home'});
        break;
      case '2':
        this.setState({two: true, page: 'two'});
        break;
      case '3':
        this.setState({three: true, page: 'three'});
        break;
      case '4':
        this.setState({four: true, page: 'four'});
        break;
    }
  };
  render() {
    return (
        <div>
          <div className={'menu-bar-root'}>
            <div className={'menu-bar'}>
              <MenuBarButton handle={this.buttonHandler} value={'1'} active={this.state.one} text={'Home'}/>
              <MenuBarButton handle={this.buttonHandler} value={'2'} active={this.state.two} text={'Two'}/>
              <MenuBarButton handle={this.buttonHandler} value={'3'} active={this.state.three} text={'Three'}/>
              <MenuBarButton handle={this.buttonHandler} value={'4'} active={this.state.four} text={'Four'}/>
              <LogInWidget/>
            </div>
          </div>
          {this.pageContent()}
        </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar/>
      </header>
    </div>
  );
}

export default App;
