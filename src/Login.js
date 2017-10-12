import React from 'react';
import { shallow } from 'enzyme';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = { username:'',
                   password:'',
                   count:'0'
                 }

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateUsername(event) {
    this.setState({username: event.target.value});
  }

  updatePassword(event) {
    this.setState({password: event.target.value});
  }

  verifyCredentials() {
    alert('Login verification to be done for ' + this.state.username);

    let  url = `http://localhost:8080/login?username=${this.state.username}&password=${this.state.password}`;
    let options = { method: "GET",
                    headers: { Accept: 'application/json' }
                  };

    fetch(url, options).then(function(response) {
      // handle HTTP response
      alert('Received response' + response);

    }, function(error) {
      // handle network error
      alert("Error connecting to network...");
    })
  }

  render() {
    var divStyle = { border: '1px solid black' }
        return (
          <div style={{divStyle}}>
            <br/>
            <center>
              Name &nbsp;
              <input type="text" id="username"
                     value = { this.state.username }
                     onChange = { this.updateUsername } /><br/><br/>

              Password &nbsp;
              <input type="password"
                     value = { this.state.password }
                     onChange = { this.updatePassword } /><br/><br/>

              <button id="login-button" onClick={() => this.verifyCredentials()}>Login</button>

              <a href="http://www.facebook.com">Forgot Password</a>
            </center>
          </div>
        );
  }
}

export default Login;