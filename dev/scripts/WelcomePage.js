import React from 'react';
import firebase, { auth, provider } from 'firebase';
import { BrowserRouter as Router, Route, Link, NavLink, browserHistory } from "react-router-dom";
import { Animated } from "react-animated-css";

class WelcomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  }
  
  loginWithGoogle() {
    console.log('clicked');
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        this.setState({
          loggedIn: true
        }, () => {
          this.props.router.history.push('/Homepage');
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="welcomeWallpaper" >
        <div className="welcomeWrapper" >
          <div className="welcomePage" >
            <h2>Welcome to</h2>
            <h1>I <img className="animated swing" isVisible={true} src="../../assets/logo-final.svg" alt="I heart concerts logo" />  Concerts!</h1>
            <h2>One place to search for upcoming concerts by your favourite artists and keep a journal of memories from past concerts you've attended!</h2>
            <button onClick={this.loginWithGoogle}>Login with Google</button>
          </div>
        </div>
      </div>
    )
  } 
}

export default WelcomePage;