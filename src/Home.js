import React, {Component} from 'react';
import './App.css';

class Login extends Component{
    render() {
        return (
            <div>
                <hr/>
                <form>
                    <label>Id: </label>
                    <input/>
                    <button>Log in</button>
                    <br/>
                    <label>Password: </label>
                    <input/>
                </form>
            </div>
        )
    }
}

class Home extends Component{
    render() {
        return (
            <div>
                <h1>Home</h1>
                <img src={'https://cdn.auth0.com/blog/react-splash-screen/react-app.png'} alt={'Image'} width={'200'} height={'100'}/>
                <div className={'home-image'}/>
                <Login/>
            </div>
        )
    }
}

export default Home;